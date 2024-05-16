/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getBookStocksRequest } from '../../apis/api/bookApi';
import ReactModal from 'react-modal';
import { useEffect, useState } from "react";
import { loanRegister } from "../../apis/api/loanApi";
import { principalState } from "../../atoms/principalAtom";
import { useRecoilState } from "recoil";
import { getReview, getReviewCount, registerReview } from "../../apis/api/reviewApi";
import Rate from "rc-rate";
import 'rc-rate/assets/index.css';
import { FaStar } from "react-icons/fa";
import STOP from "../../assets/stop.png"
import OK from "../../assets/ok.png"

function BookDetailModal({ book, isOpen, setIsOpen }) {
    const [ stockState, setStockState ] = useState([]);
    const [ reviews, setReviews ] = useState([]);
    const [ principal ] = useRecoilState(principalState);
    const [ page, setPage ] = useState(1); 
    const queryClient = useQueryClient();
    const [ reviewValue, setReviewValue ] = useState('');
    const principalData = queryClient.getQueriesData("principalQuery");
    const [ rating, setRating ] = useState(0);

    const [ reviewCount, setReviewCount ] = useState(0);
    const bookId = book?.bookId;

    //
    const [ rvpage, setRVPage ] = useState(1);
    const [ numbers, setNumbers ] = useState([]);
    const totalCount = reviewCount;
    const itemsPerPage = 4;
    const maxPageNumber = Math.ceil(totalCount / itemsPerPage);
    useEffect(() => {
        const startPageNumber = (page % 10 === 0) ? (page - 9) : (page - (page % 10) + 1);
        const endPageNumber = (startPageNumber + 9 > maxPageNumber) ? (maxPageNumber) : (startPageNumber + 9);
        let pageNumbers = []; 

        for(let i = startPageNumber; i <= endPageNumber; i++) {
            pageNumbers = [...pageNumbers, i];
        }
        setNumbers(() => pageNumbers);
    }, [rvpage, totalCount, maxPageNumber])
    const goToPage = (pageNumber) => {
        setRVPage(pageNumber);
    };

    const goToPrevPage = () => {
        if (rvpage > 1) {
            setRVPage(rvpage - 1);
        }
    };

    const goToNextPage = () => {
        if (rvpage < maxPageNumber) {
            setRVPage(rvpage + 1);
        }
    };

    //

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
                    loanStatus: stock.loanStatus,
                    dueDate: stock.dueDate
                })));
            }
        }
    )

    const reviewQuery = useQuery(
        ["reviewQuery", rvpage],
        async () => await getReview({
            id: book.bookId,
            page: rvpage
        }),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            enabled: isOpen,
            onSuccess: response => {
                console.log(response.data)
                setReviews(response?.data);
            }
        }
    )
    
    const reviewCountQuery = useQuery(
        ["reviewCountQuery", reviews],
        async () => await getReviewCount({
            id: bookId
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setReviewCount(response.data)
            },
            onError: error => {
                console.log("error");
            }
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

    return (
        <>
            { !book 
                ? <></>
                : <ReactModal
                        isOpen={isOpen}
                        onRequestClose={() => {
                            setIsOpen(() => false)
                            setPage(1)
                        }}
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
                            <div css={s.btns(page)}>
                                <button css={s.btn} onClick={() => setPage(1)}>정보</button>
                                <button css={s.btn} onClick={() => setPage(2)}>리뷰</button>
                            </div>
                            <div>
                                {page === 1 ?
                                    <>
                                        <div css={s.bookInfo}>
                                            <div>
                                                <h1>{book.bookName}</h1>
                                            </div>
                                            <div>
                                                <h3>#{book.authorName}</h3>
                                                <h3>#{book.publisherName}</h3>
                                                <h3>#{book.categoryName}</h3>
                                            </div>
                                            <div>
                                                <h3>ISBN</h3><span>|</span>
                                                <h3>{book.isbn}</h3>
                                            </div>
                                            <div>
                                                <h3>발행(출간)일자</h3><span>|</span>
                                                <h3>{book.publishDate.replace("T", " ").substring(0, 10)}</h3>
                                            </div>
                                        </div>
                                        <div css={s.bookRate}>
                                            <div css={s.bookRateL}>
                                                <Rate
                                                    count={5}
                                                    value={book.averageRating}
                                                    allowHalf
                                                    style={{
                                                            pointerEvents: "none"
                                                        }}
                                                    character={<FaStar size={30}/>}
                                                    disabled
                                                />
                                            </div>
                                            <div css={s.bookRateC}>
                                                <span>{Math.floor(book.averageRating * 2 * 10) / 10}</span>
                                            </div>
                                            <div css={s.bookRateR}>
                                                <p>회원리뷰({reviewCount}건)</p>
                                            </div>
                                        </div>  
                                        <div css={s.stockInfo}>
                                            <table>
                                                <thead css={s.head}>
                                                    <tr>
                                                        <th>No.</th>
                                                        <th>대출/반납</th>
                                                        <th>상태</th>
                                                        <th>반납예정일</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        bookStocksQuery.isLoading
                                                        ? <></>
                                                        : stockState.map(
                                                            (stock, index) => {
                                                                const currentDate = new Date();
                                                                const dueDate = new Date(stock.dueDate);
                                                                //
                                                                const futureDate = new Date(currentDate);
                                                                futureDate.setDate(currentDate.getDate() + 7);

                                                                const year = futureDate.getFullYear();
                                                                const month = String(futureDate.getMonth() + 1).padStart(2, '0');
                                                                const day = String(futureDate.getDate()).padStart(2, '0');
                                                                const hours = String(futureDate.getHours()).padStart(2, '0');
                                                                const minutes = String(futureDate.getMinutes()).padStart(2, '0');
                                                                
                                                                const futureDateFormat1 = `${year}-${month}-${day}`
                                                                const futureDateFormat2 = `${hours}:${minutes}`
                                                                //

                                                                const timeDiff = dueDate.getTime() - currentDate.getTime();

                                                                const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                                                                const hoursDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                                const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

                                                                const remainStr = daysDiff + "일 " + hoursDiff + "시간 " + minutesDiff + "분 남음"
                                                                return (
                                                                    <tr key={stock.stockId}>
                                                                        <td>{index + 1}</td>
                                                                        <td>{stock.loanStatus === 1 
                                                                            ? <button css={s.loanBtn} onClick={() => registerLoanMutation.mutate({
                                                                                userId: principal.userId,   
                                                                                bookStockId: stock.stockId  //백에서 받는 값이 bookStockId라서 bookStockId이다. 
                                                                            })}>대출</button> 
                                                                            : <button css={s.loanBtn} disabled={true}>대출중</button>
                                                                        }</td>
                                                                        <td css={s.stateIcon}>
                                                                                <img src={stock.loanStatus === 1 ? OK : STOP} alt="" />
                                                                        </td>
                                                                        <td>
                                                                            {stock.loanStatus === 2
                                                                                ? <>
                                                                                    <p>{stock.dueDate.replace("T", " ").substring(0, 10)}</p>
                                                                                    <p>{remainStr}</p>
                                                                                </> 
                                                                                : <>
                                                                                    <p>~ {futureDateFormat1}</p>
                                                                                    <p>{futureDateFormat2}</p>
                                                                                </>
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            }
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </>

                                    :<>  
                                        <div css={s.summary}>
                                                {(!reviewQuery.isLoading && !reviewCountQuery.isLoading && book) &&
                                                <>
                                                <div css={s.sumLeft}>
                                                        <h2><span>{reviewCount}</span>명의 회원이 평가한 평균 별점</h2>
                                                </div>
                                                <div css={s.sumRight}>
                                                    <div css={s.starBox}>
                                                        <Rate 
                                                            count={5}
                                                            allowHalf
                                                            value={Math.floor(book.averageRating * 10) / 10}
                                                            character={<FaStar size={40}/>}
                                                            style={{pointerEvents: "none"}}
                                                            />
                                                    </div>
                                                    <div css={s.scoreBox}>
                                                        <span>{Math.floor(book.averageRating * 2 * 10) / 10}</span>
                                                        <span>/ 10.0</span>
                                                    </div>        
                                                </div>
                                                </>
                                                }
                                        </div> 
                                        <div css={s.reviewBox}>
                                            {
                                                reviewQuery.isLoading 
                                                ? <></>
                                                : reviews.length === 0 ? <></> : reviews.map(review =>
                                                    <div key={review.reviewId} css={s.reviewContent}>
                                                        <div css={s.reviewContentLeft}>
                                                            <div>
                                                                <p>{review.content}</p>
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <p>{review.username ? review.username : "탈퇴한 사용자"}</p>
                                                                </div>
                                                                <div>
                                                                    <p>|</p>
                                                                </div>
                                                                <div>
                                                                    <p>{review.createDate.replace("T", " ").substring(0, 10)}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div css={s.reviewContentRight}>
                                                            <div>
                                                                <FaStar size={20} color="orange"/>
                                                            </div>
                                                            <div><p>{review.rating * 2}</p></div>
                                                        </div>
                                                    </div> 
                                                )
                                            }
                                        </div>
                                        <div css={s.reviewPages}>
                                            <div css={s.layout}>
                                                <div css={s.pageCount}>
                                                    <div css={s.pageNumbers}>
                                                        {rvpage !== 1 && totalCount !== 0 && (
                                                            <button onClick={() => goToPrevPage()} css={s.pageButton(false)}>
                                                                &#60;
                                                            </button>
                                                        )}
                                                        {numbers.map((number) => (
                                                            <button key={number} onClick={() => goToPage(number)} css={s.pageButton(number === rvpage)}>
                                                                {number}
                                                            </button>
                                                        ))}
                                                        {rvpage !== maxPageNumber && totalCount !== 0 && (
                                                            <button onClick={() => goToNextPage()} css={s.pageButton(false)}>
                                                                &#62;
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div css={s.bottom}>
                                            <div css={s.Base}>
                                                <div css={s.base1}>
                                                    <Rate count={5}
                                                        value={rating / 2}
                                                        allowHalf={true}
                                                        style={{fontSize: 25}}
                                                        character={<FaStar />}
                                                        onChange={value => setRating(() => value * 2)}
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