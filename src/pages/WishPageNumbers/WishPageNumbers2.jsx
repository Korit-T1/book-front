/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style"
import { Link, useSearchParams } from 'react-router-dom';

function WishPageNumbers(data) {
    const [ searchParams ] = useSearchParams();
    const page = parseInt(searchParams.get("page"));
    const filter = parseInt(searchParams.get("filter"));

    const [ numbers, setNumbers ] = useState([]);

    const totalCount = data?.data; // 전체 책의 수
    const itemsPerPage = 6; // 페이지당 보여줄 책의 수
    const maxPageNumber = Math.ceil(totalCount / itemsPerPage); // 총 페이지 수 계산

    useEffect(() => {
        const startPageNumber = (page % 10 === 0) ? (page - 9) : (page - (page % 10) + 1);
        const endPageNumber = (startPageNumber + 9 > maxPageNumber) ? (maxPageNumber) : (startPageNumber + 9);
        let pageNumbers = []; 

        for(let i = startPageNumber; i <= endPageNumber; i++) {
            pageNumbers = [...pageNumbers, i];
        }
        setNumbers(() => pageNumbers);
    }, [page, totalCount,maxPageNumber])

    return (
        <div css={s.layout}>
            <div css={s.pageCount}>
                <div css={s.pageNumbers}>
                    {page !== 1 && totalCount !== 0 && (
                        <Link
                            css={s.pageButton(false)}
                            to={`/mypage/wish?page=${page - 1}&filter=${filter}`}
                        >
                            &#60;
                        </Link>
                    )}
                    {numbers.map((number) => (
                        <Link
                            key={number}
                            css={s.pageButton(number === page)}
                            to={`/mypage/wish?page=${number}&filter=${filter}`}
                        >
                            {number}
                        </Link>
                    ))}
                    {page !== maxPageNumber && totalCount !== 0 && (
                        <Link
                            css={s.pageButton(false)}
                            to={`/mypage/wish?page=${page + 1}&filter=${filter}`}
                        >
                            &#62;
                        </Link>
                    )}
                </div>
                {totalCount !== 0 && (
                    <>
                        <div css={s.page}>Page: {page} of {maxPageNumber}</div>
                        <div css={s.total}>Total: {totalCount}</div>
                    </>
                )}
                </div>
        </div>
    );
}

export default WishPageNumbers;