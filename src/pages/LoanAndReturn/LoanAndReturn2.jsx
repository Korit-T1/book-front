/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style2"
import { getLoanDataRequest } from "../../apis/api/mypage";
import { useMutation, useQuery } from "react-query";
import { bookReturn } from "../../apis/api/loanApi";

function LoanAndReturn(data) {
    const id = data.data.data.userId;
    const [ loanDataList , setLoanDataList ] = useState([]);
    const [checkedList, setCheckedList ] = useState([]);

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
    const returnBookMutation = useMutation({
        mutationKey: "returnBookMutation",
        mutationFn: bookReturn,
        onSuccess: response => {
            searchLoansQuery.refetch();
            alert("반납완료");
        },
        onError: error => {

        }
    });
    const onCheckedElement = (checked, item) => {
        if(checked) {
            setCheckedList([...checkedList, item]);
        } else if (!checked) {
            setCheckedList(checkedList.filter(el => el !== item));
        }
    };
    const logButton = () => {
        console.log(checkedList);
    };
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
                                <button onClick={() => returnBookMutation.mutate(loan.loanId)}>반납</button>
                                <input type="checkbox" onChange={e => {onCheckedElement(e.target.checked, e.target.value);}}/>
                                
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