/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function BookSearchPageNumber({ bookCount }) {
    const [ searchParams ] = useSearchParams();
    const [ numbers, setNumbers ] = useState([]);
    const page = parseInt(searchParams.get("page"));
    const option = parseInt(searchParams.get("option"));
    const filter = parseInt(searchParams.get("filter"));
    const text = searchParams.get("text");

    const totalCount = bookCount.totalCount; 
    const itemsPerPage = 20;
    const maxPageNumber = Math.ceil(totalCount / itemsPerPage);

    useEffect(() => {
        const startPageNumber = page % 10 === 0 ? page - 9 : (page - (page % 10)) + 1;
        const endPageNumber = startPageNumber + 9 > maxPageNumber ? maxPageNumber : startPageNumber + 9;
        let pageNumbers = [];

        for(let i = startPageNumber; i <= endPageNumber; i++) {
            pageNumbers = [...pageNumbers, i];
        }

        setNumbers(() => pageNumbers);
    }, [page, totalCount, maxPageNumber])

    return (
        <div css={[s.layout, { display: 'flex', flexDirection: 'column', alignItems: 'center' }]}>
            <div css={s.pageNumbers}>
            {
                page !== 1 &&
                <a 
                    css={s.pageButton(false)}
                    href={`/search?page=${page - 1}&option=${option}&filter=${filter}&text=${text}`}
                >
                    &#60;
                </a>
            }
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
            <div css={[s.pageCount, {textAlign: 'center'}]}>
                <div css={s.page}>Page {page} of {maxPageNumber}</div>
                <div css={s.count}>Count: {bookCount.totalCount}</div>
            </div>
        </div>
    );
}

export default BookSearchPageNumber;


