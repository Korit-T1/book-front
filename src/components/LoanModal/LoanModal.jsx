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

    return (
        <div>
            
        </div>
    );
}

export default LoanModal;