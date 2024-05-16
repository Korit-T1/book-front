/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style"
import { useMutation, useQuery } from "react-query";
import { getAdminLoanList, getAdminReturnList, putAdminReturnOrNot } from "../../../apis/api/adminApi";

function AdminMainPage({children}) {
    const [ adminLoanList, setAdminLoanList ] = useState([]);
    const [ adminReturnList, setAdminReturnList ] = useState([]);

    const getAdminLoanListQuery = useQuery(
        ["getAdminLoanListQuery"],
        async () => await getAdminLoanList(),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setAdminLoanList(response?.data)
            },
            onError: error => {
                console.log("error");
            }
        }
    )
    const getAdminRetunrListQuery = useQuery(
        ["getAdminRetunrListQuery"],
        async () => await getAdminReturnList(),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setAdminReturnList(response?.data)
            },
            onError: error => {
                console.log("error");
            }
        }
    )
    const returnOrNotMutation = useMutation({
        mutationKey: "returnOrNotMutation",
        mutationFn: putAdminReturnOrNot,
        onSuccess: response => {
            getAdminRetunrListQuery.refetch();
        },
        onError: error => {

        }
    });
    //유즈이펙트 사용 예시
    useEffect(() => {
        console.log(adminReturnList)
    }, [adminReturnList])


    return (
        <>
           <div css={s.background}>
                <div css={s.layout}>
                    <div css={s.header}>
                        <h1>BookDrop</h1>
                    </div>
                    <div css={s.box}>
                        <div css={s.visitantBox}>
                        <div css={s.boxHead}>
                            <p css={s.headFont}>신규가입</p>
                        </div>
                        </div>
                        <div css={s.membership}>
                            <div css={s.boxHead}>
                                <p css={s.headFont}>공지사항</p>
                            </div>
                        </div>
                    </div>
                    <div css={s.loanBox}>
                        <div css={s.boxHead}>
                            <p css={s.headFont}>대출신청</p>
                        </div>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>아이디</th>
                                        <th>이름</th>
                                        <th>책제목</th>
                                        <th>도서코드</th>
                                        <th>이메일</th>
                                        <th>주소</th>
                                        <th>전화번호</th>
                                        <th>대출신청일자</th>
                                        <th>반납예정일자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    adminLoanList.length == 0
                                    ?<></>
                                    : adminLoanList.map(
                                            adminLoan =>
                                            <tr key={adminLoan.loanId}>
                                                <td>{adminLoan.userName}</td>
                                                <td>{adminLoan.name}</td>
                                                <td>{adminLoan.bookName}</td>
                                                <td>{adminLoan.bookStockId}</td>
                                                <td>{adminLoan.email}</td>
                                                <td>{adminLoan.address}</td>
                                                <td>{adminLoan.phone}</td>
                                                <td>{adminLoan.loanDate}</td>
                                                <td>{adminLoan.dueDate}</td>
                                            </tr>
                                    )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div css={s.returnBox}>
                        <div css={s.boxHead}>
                            <p css={s.headFont}>반납신청</p>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>아이디</th>
                                    <th>이름</th>
                                    <th>책제목</th>
                                    <th>도서코드</th>
                                    <th>이메일</th>
                                    <th>주소</th>
                                    <th>전화번호</th>
                                    <th>반납예정일자</th>
                                    <th>반납신청일자</th>
                                    <th>반납여부</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   adminReturnList.length == 0
                                   ?<></>
                                   : adminReturnList.map(
                                        adminReturn =>
                                        <tr key={adminReturn.loanId}>
                                            <td>{adminReturn.userName}</td>
                                            <td>{adminReturn.name}</td>
                                            <td>{adminReturn.bookName}</td>
                                            <td>{adminReturn.bookStockId}</td>
                                            <td>{adminReturn.email}</td>
                                            <td>{adminReturn.address}</td>
                                            <td>{adminReturn.phone}</td>
                                            <td>{adminReturn.dueDate}</td>
                                            <td>{adminReturn.returnDate}</td>
                                            <td>
                                                
                                                {
                                                    adminReturn.returnOrNot === 1 ? 
                                                    <button onClick={() => returnOrNotMutation.mutate(
                                                        adminReturn.loanId
                                                    )}>확인</button> : <button disabled={true}>완료</button>
                                                }
                                            </td>
                                        </tr>
                                   )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
           </div>
        </>
    );
}

export default AdminMainPage;