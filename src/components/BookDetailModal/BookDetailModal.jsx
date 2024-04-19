/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useQuery } from 'react-query';
import { getBookStocksRequest } from '../../apis/api/bookApi';
import ReactModal from 'react-modal';
import { useState } from "react";

function BookDetailModal({book, isOpen, setIsOpen}) {
    const [ stockState, setStockState ] = useState([]);
    
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
                                                        ? <button>대출</button> 
                                                        : <button disabled={true}>대출중...</button>
                                                    }</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </ReactModal>
            }
        </>
    );
}

export default BookDetailModal;