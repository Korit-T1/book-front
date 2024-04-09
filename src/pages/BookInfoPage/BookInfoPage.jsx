/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { bookInfoRequest } from "../../apis/api/bookApi";
import { useMutation, useQuery } from "react-query";
import * as s from "./style";

//리액트 쿼리 사용해보기

function BookInfoPage(props) {
    const [ bookInfo, setBookInfo ] = useState([]);
    
    const bookInfoQuery = useQuery(
        ["bookInfoQuery"],
        bookInfoRequest,
        {
            onSuccess: response => {
                setBookInfo(() => response.data.map(book => ({
                    id: book.bookId,
                    bookName: book.bookName,
                    isbn: book.isbn,
                    authorName: book.authorName,
                    publisher: book.publisherName,
                    image: book.coverImgUrl,
                    category: book.categoryName
                })));
            },
            retry: 0,
            refetchOnWindowFocuss: false
        }
    );
    
    console.log(bookInfo);

    return (
        <div css={s.layout}>
            <div>
                <h1>책 제목</h1>
                <span>
                    이미지
                    <div>
                        <strong>책 제목</strong>
                        <span></span>
                    </div>
                    <div>
                        <strong>저자</strong>
                        <span></span>
                    </div>
                    <div>
                        <strong>출판사</strong>
                        <span></span>
                    </div>
                    <div>
                        <strong>출판일</strong>
                        <span></span>
                    </div>  

                </span>
            </div>
        </div>
    );
}

export default BookInfoPage;