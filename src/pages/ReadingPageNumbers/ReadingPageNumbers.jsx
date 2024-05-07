import React from 'react';
import { Link } from 'react-router-dom';
import BookSearchPage from '../BookSearchPage/BookSearchPage';

    const ReadingPageNumbers = ({ page, maxPageNumber, totalCount, option, getBookCountQuery, s }) => {

        const numbers = [];
        for (let i = 1; i <= maxPageNumber; i++) {
            numbers.push(i);
        }
    
        return (
            <div css={s.layout}>
                <div css={s.pageCount}>
                    <div css={s.pageNumbers}>
                        {page !== 1 && totalCount !== 0 && (
                            <Link
                                css={s.pageButton(false)}
                                to={`/mypage/reading?page=${page - 1}&option=${option}`}
                            >
                                &#60;
                            </Link>
                        )}
    
                        {numbers.map((number) => (
                            <Link
                                key={number}
                                css={s.pageButton(number === page)}
                                to={`/mypage/reading?page=${number}&option=${option}`}
                            >
                                {number}
                            </Link>
                        ))}
    
                        {page !== maxPageNumber && totalCount !== 0 && (
                            <Link
                                css={s.pageButton(false)}
                                to={`/mypage/reading?page=${page + 1}&option=${option}`}
                            >
                                &#62;
                            </Link>
                        )}
                    </div>
    
                    {totalCount === 0 && (
                        <>
                            <BookSearchPage bookCount={getBookCountQuery.data?.data}/>
                            <div css={s.page}>Page: {page} of {maxPageNumber}</div>
                            <div css={s.total}>Total: {totalCount}</div>
                        </>
                    )}
                </div>
                
                    <div css={[s.pageCount,     {textAlign: 'center'}]}>
                        <div css={s.page}>Page {page} of {maxPageNumber}</div>
                        <div css={s.count}>Count: {getBookCountQuery.data?.data.totalCount}</div>
                    </div>
            </div>
        );
    }    

    export default ReadingPageNumbers;