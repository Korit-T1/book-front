import * as s from "./style";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Link 추가

function BookSearchPageNumbers({ bookCount }) {
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page"));
    const option = parseInt(searchParams.get("option"));
    const filter = parseInt(searchParams.get("filter"));
    const text = searchParams.get("text");
    const totalCount = bookCount.totalCount; // 전체 책의 수
    const itemsPerPage = 20; // 페이지당 보여줄 책의 수
    const maxPageNumber = Math.ceil(totalCount / itemsPerPage); // 총 페이지 수 계산

    const getPageNumbers = () => {
        const startPageNumber = page % 10 === 0 ? page - 9 : Math.max(page - (page % 10) + 1, 1);
        const endPageNumber = Math.min(startPageNumber + 9, maxPageNumber);
        return Array.from({ length: endPageNumber - startPageNumber + 1 }, (_, index) => startPageNumber + index);
    };

    const numbers = getPageNumbers();

    return (
        <div css={s.layout}>
            <div css={s.pageNumbers}>
                {page !== 1 && totalCount !== 0 && (
                    <a
                        css={s.pageButton(false)}
                        href={`/search?page=${page - 1}&option=${option}&filter=${filter}&text=${text}`}
                    >
                        &#60;
                    </a>
                )}
                {numbers.map((number) => (
                    <a
                        key={number}
                        css={s.pageButton(number === page)}
                        href={`/search?page=${number}&option=${option}&filter=${filter}&text=${text}`}
                    >
                        {number}
                    </a>
                ))}
                {page !== maxPageNumber && totalCount !== 0 && (
                    <a
                        css={s.pageButton(false)}
                        href={`/search?page=${page + 1}&option=${option}&filter=${filter}&text=${text}`}
                    >
                        &#62;
                    </a>
                )}
            </div>
            <div css={s.pageCount}>
                {totalCount !== 0 && (
                    <>
                        <div css={s.page}>
                            Page: {page} of {maxPageNumber}
                        </div>
                        <div css={s.Total}>Total: {totalCount}</div>
                    </>
                )}
            </div>
        </div>
    );
}

export default BookSearchPageNumbers;


