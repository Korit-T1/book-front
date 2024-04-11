/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useQuery } from "react-query";
import { getLoanDataRequest } from "../../apis/api/mypage";
import { Link } from "react-router-dom";
import { MENUS } from "../../constants/mypageMenu";
import * as s from "./style"

function Mypage({ username }) {
    const [ loanList, setLoanList ] = useState([]);

    const searchLoansQuery = useQuery(
        ["searchLoansQuery"],
        async () => await getLoanDataRequest({
            userName: username
        }),
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
            <div css={s.headerLayout}>
                <div css={s.header}>
                    <h1>HEADER</h1>
                </div>
            </div>
            <div css={s.bodyLayout}>
                <div css={s.profileContainer}>
                    <div css={s.left}>
                        <div css={s.profile}>
                            <div css={s.imageBox}>
                                <div css={s.image}>
                                    
                                </div>
                            </div>  
                            <div css={s.bottomBox}>
                                <h1>기타</h1>
                            </div>
                        </div>
                        <div css={s.sideMenu}>
                            {
                                MENUS.map(menu =>
                                    <Link css={s.menuItem} to={menu.path} key={menu.id}>
                                        <p>{menu.name}</p>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                    <div css={s.right}>
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
                    </div>
                </div>
            </div>
            
        </>    
    );
}

export default Mypage;
