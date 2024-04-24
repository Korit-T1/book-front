/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style2"
import { getLoanDataRequest } from "../../apis/api/mypage";
import { useQuery } from "react-query";

function LoanAndReturn(data) {
    const id = data.data.data.userId;
    const [ loanDataList , setLoanDataList ] = useState([]);

    const searchLoansQuery = useQuery(
        ["searchLoansQuery"],
        async () => await getLoanDataRequest(id),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data);
                setLoanDataList(response.data);
            },
            onError: error => {
                console.log(error);
            }
        }
    );

    return (
        <>
            <div css={s.container}>
            {
                loanDataList.map(loan => 
                    <div css={s.data} key={loan.loanId}>
                        <div css={s.bookData}>
                            <div css={s.bookImage}>
                                <img src={loan.imageUrl}></img>
                            </div>
                            <div css={s.bookInfo}>
                                <div css={s.bookName}>{loan.bookName}</div>
                                <div css={s.authorName}>{loan.authorName}</div>
                                <div css={s.publisherName}>{loan.publisherName}</div>
                                <button>대출</button>
                                <button>반납</button>
                            </div>
                        </div>
                        {/* <div css={s.buttons}>

                        </div> */}
                    </div>
                )
            }
            </div>
        </>    
    );
}

export default LoanAndReturn;