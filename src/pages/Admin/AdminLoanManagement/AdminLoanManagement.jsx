/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import * as s from "./style"
import { useEffect, useState } from "react";
import { getAdminLoanList, getAdminOverdue, getAdminReturnList, putAdminReturnOrNot } from "../../../apis/api/adminApi";

function AdminLoanManagement(props) {
    const [ adminLoanList, setAdminLoanList ] = useState([]);
    const [ adminReturnList, setAdminReturnList ] = useState([]);
    const [ adminOverdueList, setAdminOverdueList ] = useState([]);
    const [ checkedList, setCheckedList ] = useState([]);

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
            window.location.reload();
        },
        onError: error => {

        }
    });
    
    const getAdminOverdueListQuery = useQuery(
        ["getAdminOverdueListQuery"],
        async () => await getAdminOverdue(),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setAdminOverdueList(response?.data)
            },
            onError: error => {
                console.log("error");
            }
        }
    )
    useEffect(() => {
        console.log(checkedList)
    }, [checkedList])

    const onCheckedElement = (checked, item) => {
        if(checked) {
            setCheckedList([...checkedList, item]);
        } else if (!checked) {
            setCheckedList(checkedList.filter(el => el !== item));
        }
    };
   
    const checkedReturns = () => {
        checkedList.forEach(loanId => {
            returnOrNotMutation.mutate(loanId);
        });
    }
    return (
        <>
            <div css={s.background}>
                <div css={s.layout}>
                    <div css={s.loanBox}>
                        대출신청
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
                    <div css={s.returnBox}>
                    반납 현황
                    <button onClick={() => checkedReturns(checkedList)} >일체 반납</button>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
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
                                            <td>
                                                <input type="checkbox" onChange={e => {onCheckedElement(e.target.checked, adminReturn.loanId);}}/>
                                            </td>
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
                    <div css={s.overdueBox}>
                        연체 관리
                        <table>
                            <thead>
                            <th>아이디</th>
                                    <th>이름</th>
                                    <th>책제목</th>
                                    <th>도서코드</th>
                                    <th>이메일</th>
                                    <th>주소</th>
                                    <th>전화번호</th>
                                    <th>대출신청일자</th>
                                    <th>반납예정일자</th>
                                    <th>연체기간</th>
                            </thead>
                            <tbody>
                                {
                                    adminOverdueList.length == 0
                                    ? <th>연체없음</th> 
                                    : adminOverdueList.map(
                                        adminOverdue =>
                                        <tr key={adminOverdue.loanId}>
                                            <td>{adminOverdue.userName}</td>
                                            <td>{adminOverdue.name}</td>
                                            <td>{adminOverdue.bookName}</td>
                                            <td>{adminOverdue.bookStockId}</td>
                                            <td>{adminOverdue.email}</td>
                                            <td>{adminOverdue.address}</td>
                                            <td>{adminOverdue.phone}</td>
                                            <td>{adminOverdue.loanDate}</td>
                                            <td>{adminOverdue.dueDate}</td>
                                            <td>{adminOverdue.timeDifference}일</td>
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

export default AdminLoanManagement;