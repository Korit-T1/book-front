/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style2"
import { getLoanDataRequest } from "../../apis/api/mypage";
import { useQuery } from "react-query";

function LoanAndReturn(data) {
    const id = data.data.data.userId;
    const searchLoansQuery = useQuery(
        ["searchLoansQuery"],
        async () => await getLoanDataRequest(id),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data)
            },
            onError: error => {
                console.log(error);
            }
        }
    );
    // const searchLoansQuery = useQuery(
    //     ["searchLoansQuery", data?.data?.username],
    //     async () => await getLoanDataRequest(data.data.username),
    //     {
    //         retry: 0,
    //         refetchOnWindowFocus: false,
    //         onSuccess: response => {
    //             setLoanList(response.data);
    //             console.log(response.data)
    //         },
    //         onError: error => {
    //             console.log(error);
    //         }
    //     }
    // );


    return (
        <>
            <div css={s.container}>
                <div css={s.data}>
                    <div css={s.bookData}>
                        <div css={s.bookImage}>
                            <img src=""></img>
                        </div>
                        <div css={s.bookInfo}>

                        </div>
                    </div>
                    <div css={s.buttons}>

                    </div>
                </div>
                <div css={s.data}>
                    <div css={s.bookData}></div>
                    <div css={s.buttons}></div>
                </div>
            </div>
        </>    
    );
}

export default LoanAndReturn;