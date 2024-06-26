/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import * as s from "./style"
import { FaSearch, FaStar } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getBookCountRequest, searchBooksRequest } from "../../apis/api/bookApi";
import ReactModal from "react-modal";
import BookDetailModal from "../../components/BookDetailModal/BookDetailModal";
import BookSearchPageNumbers from "../../pages/BookSearchPageNumbers/BookSearchPageNumbers";
import Rate from "rc-rate";
import { BiCommentDetail } from "react-icons/bi";
import 'rc-rate/assets/index.css';
ReactModal.setAppElement("#root");

function BookSearchPage() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ searchData, setSearchData ] = useState({
        page: parseInt(searchParams.get("page")),
        option: parseInt(searchParams.get("option")),
        filter: parseInt(searchParams.get("filter")),
        text: searchParams.get("text")
    });

    const inputRef = useRef();

    const [ isOpen, setIsOpen ] = useState(false);
    const [ selectedBook, setSelectedBook ] = useState(null);

    const [ activeFilter, setActiveFilter ] = useState(searchData.filter);

    const handleFilterClick = (filterID) => {
        if(filterID !== activeFilter) {
            setActiveFilter(filterID);
        }
    };

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
            console.log("test")
            searchSubmit();
        }
    }

    const searchQuery = useQuery(
        ["searchQuery"], 
        async () => searchBooksRequest(searchData),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                console.log(response.data);
            }
        }
    )   

    const getBookCountQuery = useQuery(
        ["getBookCountQuery", searchQuery.data],
        async () => await getBookCountRequest({
            option: parseInt(searchParams.get("option")),
            text: searchParams.get("text")
        }),
        {  
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data);
            }
        }
    )

    const searchSubmit = (filter) => {
        if(filter === undefined) {
            filter = 1;
        }
        window.location.replace(`/search?page=1&option=${searchData.option}&filter=${filter}&text=${searchData.text}`);
        handleFilterClick(filter);
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
                        value={searchData.text} 
                        onChange={handleSearchDataChange} 
                        onKeyDown={handleSearchInputKeyDown}
                        ref={inputRef}/>
                    <div css={s.searchButton} onClick={() => searchSubmit()}>
                        <FaSearch />
                    </div>
                </div>
            </div>

            <div css={s.filter(activeFilter)}>
                <button css={s.filterBtn} onClick={() => {
                    searchSubmit(1)
                    }}>전체</button>
                <button css={s.filterBtn} onClick={() => {
                    searchSubmit(2)
                    }}>평점높은순</button>
                <button css={s.filterBtn} onClick={() => {
                    searchSubmit(3)
                    }}>평점낮은순</button>
                <button css={s.filterBtn} onClick={() => {
                    searchSubmit(4)
                    }}>리뷰많은순</button>
                <button css={s.filterBtn} onClick={() => {
                    searchSubmit(5)
                    }}>리뷰적은순</button>
            </div>

            <div css={s.main}>
                {
                    searchQuery.isLoading 
                    ? <></>
                    : searchQuery.data?.data?.length === 0 
                        ? <h1>검색 결과가 없습니다.</h1>
                        : searchQuery.data?.data?.map(book => {
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
                                    <div css={s.rnr}>
                                        <div css={s.rnr1}>
                                            <div>
                                                <Rate
                                                    count={5}
                                                    value={book.averageRating}
                                                    allowHalf={true}
                                                    style={{fontSize: 20, 
                                                            pointerEvents: "none"
                                                        }}
                                                    character={<FaStar />}
                                                    disabled
                                                />
                                            </div>
                                            <div css={s.rnr11}>
                                                <span>{Math.floor(book.averageRating * 2 * 10) / 10}</span>
                                            </div>
                                        </div>
                                        <div css={s.rnr2}>
                                            <div>
                                                <BiCommentDetail color="#607fe4" size={22}/>
                                            </div>
                                            <div css={s.rnr22}><span>{book.reviewCount}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    })
                }
            </div>

            <div>
                {!getBookCountQuery.isLoading && <BookSearchPageNumbers bookCount={getBookCountQuery.data?.data}/>}
            </div>

            <BookDetailModal book={selectedBook} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    );
}

export default BookSearchPage;