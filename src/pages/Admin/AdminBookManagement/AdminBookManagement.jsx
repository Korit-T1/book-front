/** @jsxImportSource @emotion/react */
import Select from "react-select";
import { useSearchParams } from "react-router-dom";
import * as s from "./style";
import React, { useRef, useState } from "react";
import { useQuery } from "react-query";
import { getBookCountRequest, searchBooksRequest } from "../../../apis/api/bookApi";
import { useReactSelect } from "../../../hooks/useReactSelect";
import { useProductOnKeyUpInput } from "../../../hooks/useBookOnKeyUpInput";
import AdminBookSearchPageNumbers from "../AdminBookSearchPageNumbers/AdminBookSearchPageNumbers";

function AdminBookManagement() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const searchCount = 20;
    const [ bookList, setBookList ] = useState([]);
    const selectedBookType = useReactSelect({value: 0, label: "전체"});
    const inputRef = useRef();

    const bookListQuery = useQuery(
        ["bookListQuery", searchParams.get("page")],
        async () => await searchBooksRequest({
            page: searchParams.get("page"),
            count: searchCount,
            option: selectedBookType.option.value,
            text: searchText.value
        }),
        {
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setBookList(response.data)
        },
        onError: error => {
            console.log(error)
        }
        }

    )
    const getBookCountQuery = useQuery(
        ["getBookCountQuery", bookListQuery.data],
        async () => await getBookCountRequest({
            count: searchCount,
            option: selectedBookType.option.value,
            searchText: searchText.value
        }),
        {
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response);
            }
        }
    );


    const searchTypeOptions = [
        {value: 1, label: "도서명"},
        {value: 2, label: "저자명"},
        {value: 3, label: "출판사"}
    ];
    
    
    const selectStyle2 = {
        control: baseStyles => ({
            ...baseStyles,
            borderRadius: "0px",
            border: "none",
            borderRight: "1px solid #dbdbdb",
            outline: "none",
            boxShadow: "none"
        })
    }

    const searchSubmit = () => {
        setSearchParams({
            page: 1
        })
        bookListQuery.refetch();
    }

    const handleEditBook = (bookId) => {
        console.log("수정할 책: ", bookId);
    
    };

    const handleDeleteBook = (bookId) => {
        console.log("삭제할 책: ", bookId);
    };


    const searchText = useProductOnKeyUpInput(searchSubmit);
    console.log(bookList)
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div css={s.selectInput}>
                    <Select 
                        styles={selectStyle2} 
                        options={[{value: 0, label: "전체"}, ...searchTypeOptions]}
                        defaultValue={selectedBookType.defaultValue}
                        value={selectedBookType.option}
                        onChange={selectedBookType.handleOnChange}
                    />
                    <input type="text" 
                        ref={inputRef} 
                        value={searchText.value} 
                        onChange={searchText.handleOnChange} 
                        onKeyUp={searchText.handleOnKeyUp}
                        placeholder="검색"
                    />
                </div>
                <div css={s.tableLayout}>
                    <table css={s.table}>
                        <thead>
                            <tr css={s.theadTr}>
                                <th><input type="checkbox"/></th>
                                <th>코드번호</th>
                                <th>도서명</th>
                                <th>저자명</th>
                                <th>출판사명</th>
                                <th>ISBN</th>
                                <th>카테고리</th>
                                <th>표지URL</th>
                                <th>도서형식</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookList.map(book => (
                                <tr key={book.bookId}>
                                    <td>
                                        <input 
                                            type="checkbox" 
                                            value={book.bookId} 
                                        />
                                    </td>
                                    <td>{book.bookId}</td>
                                    <td>{book.bookName}</td>
                                    <td>{book.authorName}</td>
                                    <td>{book.publisherName}</td>
                                    <td>{book.isbn}</td>
                                    <td>{book.bookTypeName}</td>
                                    <td>{book.categoryName}</td>
                                    <td>{book.coverImgUrl}</td>
                                    <td>
                                        <button onClick={() => handleEditBook(book.bookId)}>수정</button>
                                        <button onClick={() => handleDeleteBook(book.bookId)}>삭제</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {
               !getBookCountQuery.isLoading &&
               <AdminBookSearchPageNumbers bookCount={getBookCountQuery.data?.data}/>
                 }
        </div>
    </div>
    );
}

export default AdminBookManagement;


