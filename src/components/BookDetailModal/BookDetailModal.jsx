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
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { FaStar } from "react-icons/fa";




function BookDetailModal({book, isOpen, setIsOpen}) {
    const [ stockState, setStockState ] = useState([]);
    const [ reviews, setReviews ] = useState([]);
    const [ principal ] = useRecoilState(principalState);
    const [ page, setPage ] = useState(1); 
    const queryClient = useQueryClient();
    const [ reviewValue, setReviewValue ] = useState('');
    const principalData = queryClient.getQueriesData("principalQuery");
    const [ rating, setRating] = useState(0);
    
    const bookStocksQuery = useQuery(
        ["bookStocksQuery"],
        () => getBookStocksRequest(book.bookId),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            enabled: isOpen,
            onSuccess: response => {
                console.log(response.data)
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
                console.log(response.data)
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
     console.log(book);
    return (
        <>
            { !book 
                ? <></>
                : <ReactModal
                        isOpen={isOpen}
                        onRequestClose={() => setIsOpen(() => false)}
                        style={{
                            content: {
                                margin: "80px auto",
                                width: "1000px",
                                height: "625px"
                            }
                        }}
                    >
                    <div css={s.container}>
                        <div css={s.imgBox} onClick={() => window.open(book.coverImgUrl, '_blank')}>
                            <img src={book.coverImgUrl} alt="" />
                        </div>
                        <div css={s.infoBox}>
                            <div css={s.btns}>
                                <button css={s.btn} onClick={() => setPage(1)}>정보</button>
                                <button css={s.btn} onClick={() => setPage(2)}>리뷰</button>
                            </div>
                            <div>
                                {
                                page === 1 
                                ?
                                    <>
                                    <div css={s.bookInfo}>
                                        <h1>{book.bookName}</h1>
                                        <h3>{book.authorName}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                        {book.publisherName}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                        {book.publishDate.replace("T", " ").substring(0, 10)}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                        {book.categoryName}</h3>
                                    </div>
                                    <div css={s.bookRate}>
                                        <Rate
                                            count={5}
                                            value={book.averageRating}
                                            allowHalf={false}
                                            style={{fontSize: 40, 
                                                    pointerEvents: "none"
                                                }}
                                            character={<FaStar />}
                                            disabled
                                        />
                                        <span>{Math.floor(book.averageRating)}</span>
                                    </div>  
                                    <div css={s.stockInfo}>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>도서코드</th>
                                                    <th>대출/반납</th>
                                                    <th>상태</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    bookStocksQuery.isLoading
                                                    ? <></>
                                                    : stockState.map(
                                                        (stock, index) =>
                                                            <tr key={stock.bookStockId}>
                                                                <td>{index + 1}번 도서</td>
                                                                <td>{
                                                                    stock.loanStatus === 1 
                                                                    ? <button onClick={() => registerLoanMutation.mutate({
                                                                        userId: principal.userId,   
                                                                        bookStockId: stock.stockId  //백에서 받는 값이 bookStockId라서 bookStockId이다. 
                                                                    })}>대출</button> 
                                                                    : <button disabled={true}>대출중...</button>
                                                                }</td>
                                                                <td>{index < 2 ? "3일 11시간 49분 남음" : "O"}</td>
                                                            </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    </>
                                    :
                                    <>  
                                        <div css={s.summary}>
                                            <div>
                                                <h2>{reviews.length}명의 회원이 평가한 평균 별점</h2>
                                            </div>
                                            <div>
                                                <Rate
                                                    count={5}
                                                    value={book.averageRating}
                                                    allowHalf={false}
                                                    style={{fontSize: 40, 
                                                            pointerEvents: "none"
                                                        }}
                                                    character={<FaStar />}
                                                    disabled/>
                                                <span>{Math.round(book.averageRating * 10) / 10}</span>
                                                <span>/ 10.0</span>
                                            </div>
                                        </div> 
                                        <div css={s.reviewBox}>
                                            {
                                                reviewQuery.isLoading 
                                                ? <></>
                                                : reviews.length === 0 ? <></> : reviews.map((review, index) =>
                                                    <div key={index} css={s.reviewContent}>
                                                        <div css={s.reviewContentLeft}>
                                                            <p>{review.content}</p>
                                                            <p>{review.username ? review.username : "탈퇴한 사용자"} | {review.createDate.replace("T", " ").substring(0, 10)}</p>
                                                        </div>
                                                        <div css={s.reviewContentRight}>
                                                            <div>
                                                                <FaStar size={25} color="orange"/>
                                                            </div>
                                                            <div><p>{review.rating}</p></div>
                                                        </div>
                                                    </div> 
                                                )
                                            }
                                        </div>
                                        <div css={s.reviewPages}>
                                            
                                        </div> 
                                        <div css={s.bottom}>
                                            <div css={s.Base}>
                                                <div css={s.base1}>
                                                    <Rate count={5}
                                                        value={rating}
                                                        allowHalf={true}
                                                        style={{fontSize: 25}}
                                                        character={<FaStar />}
                                                        onChange={value => setRating(() => value)}
                                                    />
                                                </div>
                                                <div css={s.base2}>
                                                    <span css={s.RatingValue}>{rating}</span>
                                                </div>
                                                <div css={s.base3}>
                                                    <button css={s.submit} onClick={
                                                        () => {
                                                            registerReviewMutation.mutate({
                                                                bookId: book.bookId,
                                                                userId: principal.userId,
                                                                content: reviewValue,
                                                                rating: rating   
                                                            });
                                                        }
                                                    }>등록</button>
                                                </div>
                                            </div>
                                            <div css={s.comment}>                                  
                                                <textarea 
                                                    value={reviewValue}
                                                    onChange={handleTextChange}
                                                    css={s.reviewArea}></textarea>
                                            </div>
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