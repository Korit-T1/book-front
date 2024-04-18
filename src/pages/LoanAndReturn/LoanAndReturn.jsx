/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useState } from "react";
import { useQuery } from "react-query"
import { getLoanDataRequest } from "../../apis/api/mypage";

function LoanAndReturn(data) {
    const [ loanList, setLoanList ] = useState([]);

    const searchLoansQuery = useQuery(
        ["searchLoansQuery", data?.data?.username],
        async () => await getLoanDataRequest(data.data.username),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setLoanList(response.data);
                console.log(response.data)
            },
            onError: error => {
                console.log(error);
            }
        }
    );

    return (
        <>
            <h2>대출/반납 목록</h2>
            <div css={s.statusBox}>
                <div css={s.status}>
                    <div css={s.statusInfo}></div>
                    <div css={s.statusInfo}></div>
                    <div css={s.statusInfo}></div>
                    <div css={s.statusInfo}></div>
                    <div css={s.statusInfo}></div>
                </div>
            </div>
            {searchLoansQuery.isLoading 
                ? <></>
                :
                <table css={s.loanTable}>
                        <thead>
                            <tr>
                                <th>대출번호</th>
                                <th>재고번호</th>
                                <th>제목</th>
                                <th>저자</th>
                                <th>출판사</th>
                                <th>대출일자</th>
                                <th>반납예정일</th>
                                <th>반납일자</th>
                            </tr>
                        </thead>
                    <tbody>
                        {
                            loanList.map(
                                loan => 
                                    <tr key={loan.loanId}>
                                        <td>{loan.loanId}</td>
                                        <td>{loan.bookStockId}</td>
                                        <td>{loan.bookName}</td>
                                        <td>{loan.authorName}</td>
                                        <td>{loan.publisherName}</td>
                                        <td>{loan.loanDate}</td>
                                        <td>{loan.dueDate}</td>
                                        <td>{loan.returnDate === null ? "대출중" : loan.returnDate}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            }
        </>
    );
}

export default LoanAndReturn;