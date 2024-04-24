/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import * as s from "./style"
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { searchBooksRequest } from "../../apis/api/bookApi";
import ReactModal from "react-modal";
import BookDetailModal from "../../components/BookDetailModal/BookDetailModal";
ReactModal.setAppElement("#root");

function BookSearchPage() {
    const [ searchParams, setSearchParams ] = useSearchParams();

    const [ searchData, setSearchData ] = useState({
        page: parseInt(searchParams.get("page")),
        option: parseInt(searchParams.get("option")),
        text: searchParams.get("text")
    });

    const inputRef = useRef();

    const [ isOpen, setIsOpen ] = useState(false);
    const [ selectedBook, setSelectedBook ] = useState(null);

    useEffect(() => {
        setSearchParams(searchData);
    }, [searchData])

    const handleSearchDataChange = (e) => {
        setSearchData(searchData => {
            return {
                ...searchData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSearchInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            searchSubmit();
        }
    }

    const searchQuery = useQuery(
        ["searchQuery"], 
        async () => searchBooksRequest(searchData),
        {
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const searchSubmit = () => {
        searchQuery.refetch();
    }

    return (
        <>
            <div css={s.header}>
                <h1>통합검색</h1>
                <div css={s.searchBoxContainer}>
                    <select css={s.select} name="option" value={searchData.option} onChange={handleSearchDataChange} >
                        <option value="0">통합검색</option>
                        <option value="1">제목</option>
                        <option value="2">저자</option>
                        <option value="3">출판사</option>
                    </select>
                    <input 
                        css={s.searchBox} 
                        type="text" 
                        name={"text"} 
                        value={searchData.value} 
                        onChange={handleSearchDataChange} 
                        onKeyDown={handleSearchInputKeyDown}
                        ref={inputRef}/>
                    <div css={s.searchButton} onClick={() => searchSubmit()}>
                        <FaSearch />
                    </div>
                </div>
            </div>
            <div css={s.main}>
                {
                    searchQuery.isLoading 
                    ? <></>
                    : searchQuery?.data?.data?.books.map(book => {
                        return <div css={s.card} key={book.bookId} onClick={
                            () => {
                                setIsOpen(() => true);
                                setSelectedBook(() => book);
                            }
                            }>
                            <div css={s.imgBox}>
                                <img src={book.coverImgUrl} alt="" />
                            </div>
                            <div css={s.contentBox}>
                                <div css={s.bookName}>
                                    {!searchQuery?.data?.data?.searchText ? book.bookName : <span dangerouslySetInnerHTML={{__html: book.bookName.replaceAll(searchQuery?.data?.data?.searchText, `<span style="color: red;">${searchQuery?.data?.data?.searchText}</span>`)}} />}
                                </div>
                                <div css={s.authorName}>
                                    {!searchQuery?.data?.data?.searchText ? book.authorName : <span dangerouslySetInnerHTML={{__html: book.authorName.replaceAll(searchQuery?.data?.data?.searchText, `<span style="color: red;">${searchQuery?.data?.data?.searchText}</span>`)}} />} 저
                                </div>
                                <div css={s.publisherName}>
                                    {!searchQuery?.data?.data?.searchText ? book.publisherName : <span dangerouslySetInnerHTML={{__html: book.publisherName.replaceAll(searchQuery?.data?.data?.searchText, `<span style="color: red;">${searchQuery?.data?.data?.searchText}</span>`)}} />} 출판
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div css={s.pagination}>
                
            </div>

            <BookDetailModal book={selectedBook} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    );
}

export default BookSearchPage;