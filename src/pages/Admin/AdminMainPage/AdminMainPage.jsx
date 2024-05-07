/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style"
import { useQuery } from "react-query";
import { getAdminLoanList } from "../../../apis/api/adminApi";

function AdminMainPage({children}) {
    const [ adminLoanList, setAdminLoanList ] = useState([]);

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
    //유즈이펙트 사용 예시
    useEffect(() => {
        console.log(adminLoanList)
    }, [adminLoanList])


    return (
        <>
           <div css={s.background}>
                <div css={s.layout}>
                    <div css={s.box}>
                        <div css={s.visitantBox}>
                            방문자수
                        </div>
                        <div css={s.membership}>
                            회원목록
                        </div>
                    </div>
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
                    <div>

                    </div>
                </div>
           </div>
        </>
    );
}

export default AdminMainPage;