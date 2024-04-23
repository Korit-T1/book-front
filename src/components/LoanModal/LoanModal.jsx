/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { loanStateRequest } from "../../apis/api/bookApi";
import { useMutation, useQuery } from "react-query";
import * as s from "./style";

function LoanModal(props) {
    const [ loanState, setLoanState ] = useState([]);
    
    const loanStateQuery = useQuery(
        ["loanStateQuery"],
        loanStateRequest,
        {
          onSuccess: response => {
              setLoanState(() => response.data.map(loan => ({
                stockId: loan.bookStockId,
                loanDate: loan.loanDate,
                dueDate: loan.dueDate,
                returnDate: loan.returnDate,
                loanStatus: loan.loanStatus //loanStatus가 1이면 대출가능, 2이면 대출 불가능
              })));
          },
          retry: 0,
          refetchOnWindowFocuss: false
        }
      );
      if (loanStateQuery.isLoading) {
        return <div>Loading...</div>;
    }
      
    if (loanStateQuery.isError) {
        return <div>Error: {loanStateQuery.error.message}</div>;
    }
    
    const handleClick = async () => {
      try{
          // loanRequest
      } catch (error) {

      }
    }
  
    
    return (
        <div css={s.content}>
          <table>
            <thead>
              <tr>
                <th>도서코드</th>
                <th>대출/반납</th>
              </tr>
            </thead>
            <tbody>
              {
                loanState.map(
                  loan =>
                  <tr key={loan.bookStockId}>
                    <td>{loan.stockId}</td>
                    <td>{
                    loan.loanStatus === 1 
                    ? <button>대출</button> 
                    : <button disabled={true}>대출중...</button>
                    }</td>
                  </tr>

                )
              }
            </tbody>
          </table>
        </div>
    );
}

export default LoanModal;