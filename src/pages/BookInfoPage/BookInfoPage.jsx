/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { bookInfoRequest, loanStateRequest } from "../../apis/api/bookApi";
import { useMutation, useQuery } from "react-query";
import Modal from "react-modal"
import * as s from "./style";
import LoanModal from "../../components/LoanModal/LoanModal";

//리액트 쿼리 사용해보기

function BookInfoPage(props) {
    const [ bookInfo, setBookInfo ] = useState([]);
    const [ loanState, setLoanState ] = useState([]);
    const [ isOpen, setIsOpen ] = useState(false)
    
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
                    category: book.categoryName,
                    publishDate: book.publishDate
                })));
            },
            retry: 0,
            refetchOnWindowFocuss: false
        }
    );

    if (bookInfoQuery.isLoading) {
        return <div>Loading...</div>;
    }
      
    if (bookInfoQuery.isError) {
        return <div>Error: {bookInfoQuery.error.message}</div>;
    }
    if (bookInfo.length > 0) {
        const firstBookInfo = bookInfo[0]; // 첫 번째 책 정보 객체 가져오기
    }
    return (
        <div css={s.layout}>
            <div>
                <h1>책 제목</h1>
                <span>
                    이미지
                    <div>
                        <strong>책 제목:</strong>
                        <span>{bookInfo[0].bookName}</span>
                    </div>
                    <div>
                        <strong>카테고리:</strong>
                        <span>{bookInfo[0].category}</span>
                    </div>
                    <div>
                        <strong>저자:</strong>
                        <span>{bookInfo[0].authorName}</span>
                    </div>
                    <div>
                        <strong>출판사:</strong>
                        <span>{bookInfo[0].publisher}</span>
                    </div>
                    <div>
                        <strong>출판일:</strong>
                        <span>{bookInfo[0].publishDate}</span>
                    </div>  
                    <button onClick={() => setIsOpen(true)}>대출</button>
                    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                        {/* <LoanModal /> */}
                        <button onClick={() => setIsOpen(false)}>닫기</button>
                    </Modal>
                </span>
            </div>
        </div>
    );
}

export default BookInfoPage;