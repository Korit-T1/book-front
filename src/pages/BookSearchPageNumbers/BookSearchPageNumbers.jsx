/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";



function BookSearchPageNumber({ bookCount }) {

    const [ searchParams ] = useSearchParams();
    const page = parseInt(searchParams.get("page"));
    const [ numbers, setNumbers ] = useState([]);
    const maxPageNumber = bookCount.maxPageNumber;

    useEffect(() => {
        const startPageNumber = page % 10 === 0 ? page - 9 : (page - (page % 10)) + 1;
        const endPageNumber = startPageNumber + 9 > maxPageNumber ? maxPageNumber : startPageNumber + 9;
        let pageNumbers = [];

        for(let i = startPageNumber; i <= endPageNumber; i++) {
            pageNumbers = [...pageNumbers, i];
        }

        setNumbers(() => pageNumbers);
        }, [page, bookCount])
        return (
            <div css={[s.layout, { display: 'flex', flexDirection: 'column', alignItems: 'center' }]}>
                <div css={s.pageNumbers}>
                {
                    page !== 1 &&
                    <Link 
                        css={s.pageButton(false)}
                        to={`/admin/mainpage?page=${page - 1}`}
                    >&#60;</Link>
                },
                {
                    numbers.map(number =>
                        <Link key={number} css={s.pageButton(number === page)} to={`/admin/mainpage?page=${number}`}>{number}</Link>
                    )
                },
                {
                    page !== maxPageNumber &&
                    <Link 
                        css={s.pageButton(false)}
                        to={`/admin/mainpage?page=${page + 1}`}
                    >&#62;</Link>
                }
            </div>
            <div css={[s.pageCount, {textAlign: 'center'}]}>
                <div css={s.page}>Page {page} of {maxPageNumber}</div>
                <div css={s.count}>Count: {bookCount.totalCount}</div>
            </div>
        </div>
    );
}

export default BookSearchPageNumber;


