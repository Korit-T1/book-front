/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style"

function ReviewPagination({ count }) {
    const [ page, setPage ] = useState(1);
    const [ numbers, setNumbers ] = useState([]);
    const totalCount = count;
    const itemsPerPage = 4;         // 페이지당 보여줄 리뷰의 수
    const maxPageNumber = Math.ceil(totalCount / itemsPerPage); // 총 페이지 수 계산

    useEffect(() => {
        const startPageNumber = (page % 10 === 0) ? (page - 9) : (page - (page % 10) + 1);
        const endPageNumber = (startPageNumber + 9 > maxPageNumber) ? (maxPageNumber) : (startPageNumber + 9);
        let pageNumbers = []; 

        for(let i = startPageNumber; i <= endPageNumber; i++) {
            pageNumbers = [...pageNumbers, i];
        }
        setNumbers(() => pageNumbers);
    }, [page, totalCount, maxPageNumber])

    const goToPage = (pageNumber) => {
        setPage(pageNumber);
    };

    const goToPrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const goToNextPage = () => {
        if (page < maxPageNumber) {
            setPage(page + 1);
        }
    };

    return (
        <div css={s.layout}>
            <div css={s.pageCount}>
                <div css={s.pageNumbers}>
                    {page !== 1 && totalCount !== 0 && (
                        <button onClick={goToPrevPage} css={s.pageButton(false)}>
                            &#60;
                        </button>
                    )}
                    {numbers.map((number) => (
                        <button key={number} onClick={() => goToPage(number)} css={s.pageButton(number === page)}>
                            {number}
                        </button>
                    ))}
                    {page !== maxPageNumber && totalCount !== 0 && (
                        <button onClick={goToNextPage} css={s.pageButton(false)}>
                            &#62;
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ReviewPagination;



                {/* {totalCount !== 0 && (
                    <>
                        <div css={s.page}>Page: {page} of {maxPageNumber}</div>
                        <div css={s.total}>Total: {totalCount}</div>
                    </>
                )} */}