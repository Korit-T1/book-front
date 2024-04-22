/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getBookStocksRequest } from '../../apis/api/bookApi';
import ReactModal from 'react-modal';
import { useState } from "react";
import { loanRegister } from "../../apis/api/loanApi";
import { principalState } from "../../atoms/principalAtom";
import { useRecoilState } from "recoil";

function BookDetailModal({book, isOpen, setIsOpen}) {
    const [ stockState, setStockState ] = useState([]);
    const [ principal, setPrincipal ] = useRecoilState(principalState);
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueriesData("principalQuery");
    const data = principalData?.data;

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
     const registerLoanMutation = useMutation({
        mutationKey: "registerLoanMutation",
        mutationFn: loanRegister,
        onSuccess: response => {
            alert("대출신청완료");
        },
        onError: error => {

        }
     });

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
                                                        ? <button onClick={() => registerLoanMutation.mutate({
                                                            userId: principal.userId,
                                                            bookStockId: stock.stockId
                                                        })}>대출</button> 
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