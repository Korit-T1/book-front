/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getBookStocksRequest } from '../../apis/api/bookApi';
import ReactModal from 'react-modal';
import { useEffect, useState } from "react";
import { loanRegister } from "../../apis/api/loanApi";
import { principalState } from "../../atoms/principalAtom";
import { useRecoilState } from "recoil";
import { getReview, registerReview } from "../../apis/api/reviewApi";

function BookDetailModal({book, isOpen, setIsOpen, searchPage, option, text}) {
    const [ stockState, setStockState ] = useState([]);
    const [ reviews, setReviews ] = useState([]);
    const [ principal ] = useRecoilState(principalState);
    const [ page, setPage ] = useState(1); 
    const queryClient = useQueryClient();
    const [ reviewValue, setReviewValue ] = useState('');
    const principalData = queryClient.getQueriesData("principalQuery");

    const bookStocksQuery = useQuery(
        ["bookStocksQuery"],
        () => getBookStocksRequest(book.bookId),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            enabled: isOpen,
            onSuccess: response => {
                setStockState(() => response.data.map(stock => ({
                    stockId: stock.bookStockId,
                    loanStatus: stock.loanStatus
                })));
            },
            retry: 0
        }
    )
    const reviewQuery = useQuery(
        ["reviewQuery"],
        () => getReview(book.bookId),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            enabled: isOpen,
            onSuccess: response => {
                setReviews(response?.data);
            },
            retry: 0
        }
    )
     const registerLoanMutation = useMutation({
        mutationKey: "registerLoanMutation",
        mutationFn: loanRegister,
        onSuccess: response => {
            bookStocksQuery.refetch()
            alert("대출신청완료");
        },
        onError: error => {

        }
     });
  
     const registerReviewMutation = useMutation({
        mutationKey: "registerReviewMutation",
        mutationFn: registerReview,
        onSuccess: response => {
            reviewQuery.refetch()
            alert("리뷰작성");
            setReviewValue("");
        },
        onError: error => {

        }
     });
     
     const handleTextChange = (e) => {
        setReviewValue(e.target.value);
     }
     console.log(reviews);
    return (
        <>
            { !book 
                ? <></>
                : <ReactModal
                        isOpen={isOpen}
                        onRequestClose={() => setIsOpen(() => false)}
                        style={{
                            content: {
                                margin: "150px auto",
                                width: "800px",
                                height: "500px"
                            }
                        }}
                    >
                    <div css={s.container}>
                        <div css={s.imgBox} onClick={() => window.open(book.coverImgUrl, '_blank')}>
                            <img src={book.coverImgUrl} alt="" />
                        </div>
                        <div css={s.infoBox}>
                            <button onClick={() => setPage(1)}>정보</button>
                            <button onClick={() => setPage(2)}>리뷰</button>
                            <div>
                                {
                                page === 1 
                                ?
                                    <>
                                    <div css={s.bookInfo}>
                                        <h3>제목: {book.bookName}</h3>
                                        <h3>저자: {book.authorName}</h3>
                                        <h3>출판사: {book.publisherName}</h3>
                                        <h3>출판일: {book.publishDate}</h3>
                                    </div>
                                    <div css={s.stockInfo}>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>도서코드</th>
                                                    <th>대출/반납</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    bookStocksQuery.isLoading
                                                    ? <></>
                                                    : stockState.map(
                                                        stock =>
                                                        <tr key={stock.bookStockId}>
                                                            <td>{stock.stockId}</td>
                                                            <td>{
                                                                stock.loanStatus === 1 
                                                                ? <button onClick={() => registerLoanMutation.mutate({
                                                                    userId: principal.userId,   
                                                                    bookStockId: stock.stockId  //백에서 받는 값이 bookStockId라서 bookStockId이다. 
                                                                })}>대출</button> 
                                                                : <button disabled={true}>대출중...</button>
                                                            }</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    </>
                                    :
                                    <>  
                                        {
                                            reviewQuery.isLoading 
                                            ? <></>
                                            : reviews.length === 0 ? <></> : reviews.map(
                                                review =>
                                                <div>
                                                    <p>{review.content}</p>
                                                </div>
                                            )
                                        }
                                        <div>
                                            <div>

                                            </div>
                                            <textarea 
                                                value={reviewValue}
                                                onChange={handleTextChange}
                                                cols="30" 
                                                rows="10" 
                                                css={s.reviewArea}></textarea>
                                            <button onClick={() => registerReviewMutation.mutate({
                                                bookId: book.bookId,
                                                userId: principal.userId,
                                                content: reviewValue    
                                            })}>작성</button>
                                        </div>
                                    </>
                                }
                            </div>  
                        </div>
                    </div>
                </ReactModal>
            }
        </>
    );
}

export default BookDetailModal;