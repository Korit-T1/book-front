/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style"
import { useQuery } from "react-query";
import { getPopularBooksRequest, getTopFiveBooksRequest } from "../../apis/api/bookApi";
import { FaRankingStar } from "react-icons/fa6";
import { FcBullish } from "react-icons/fc";
import { CiMedal } from "react-icons/ci";
import { Bs1SquareFill } from "react-icons/bs";
import { Bs2SquareFill } from "react-icons/bs";
import { Bs3SquareFill } from "react-icons/bs";
import { Bs4SquareFill } from "react-icons/bs";
import { Bs5SquareFill } from "react-icons/bs";


function Home() {
    const [ popularBooks, setPopularBooks ] = useState([]);
    const [ topFiveBooks, setTopFiveBooks ] = useState([]);

    const getPopularBooksQuery = useQuery(
        ["getPopularBooksQuery"],
        async () => await getPopularBooksRequest(),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data);
                setPopularBooks(response.data);
            }
        }
    );

    const getTopFiveBooksQuery = useQuery(
        ["getTopFiveBooksQuery"],
        async () => await getTopFiveBooksRequest(),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data);
                setTopFiveBooks(response.data);
            }
        }
    );

    

    return (
        <div css={s.layout}>
            <div css={s.navigationBar}>
                <div css={s.category}>

                </div>
            </div>
            <div css={s.title}>
                <h1>급상승! 많이 보고 있는 작품</h1>
                <FcBullish size={50} color="yellow" css={s.graph}/>
            </div>
            <div css={s.container}>
                {
                    popularBooks.map(book => 
                        <div css={s.item} key={book.bookId}>
                            <div css={s.bookImage}>
                                <img src={book.coverImgUrl} alt="" />
                            </div>
                            <div css={s.bookInfo}>
                                <div css={s.categoryName}>{book.categoryName}</div>
                                <div css={s.bookName}>{book.bookName}</div>
                                <div css={s.authorAndPublisher}>{book.authorName} - {book.publisherName}</div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div css={s.title}>
                <h1>금주의 Top 5</h1>
                <FaRankingStar size={50} color="yellow" css={s.ranking}/>
            </div>
            <div css={s.container}>
                {
                    topFiveBooks.map((book, index) => 
                        <div css={s.Rank(index)} key={book.bookId}>
                            <div css={s.first}>
                                <div css={s.first2}>
                                    <img src={book.coverImgUrl} alt=""/>
                                    {
                                        index === 0 ? <CiMedal css={s.medal} size={55}/> : <></>
                                    }
                                    {
                                        index === 0 ? <Bs1SquareFill css={s.num} size={21}/>
                                        : index === 1 ? <Bs2SquareFill css={s.num} size={21}/>
                                        : index === 2 ? <Bs3SquareFill css={s.num} size={21}/>
                                        : index === 3 ? <Bs4SquareFill css={s.num} size={21}/>
                                        : <Bs5SquareFill css={s.num} size={21}/>
                                    }
                                </div>
                            </div>
                            <div css={s.bookInfo}>
                                <div css={s.categoryName}>{book.categoryName}</div>
                                <div css={s.bookName}>{book.bookName}</div>
                                <div css={s.authorAndPublisher}>{book.authorName} - {book.publisherName}</div>
                            </div>
                        </div>)
                }
            </div>
            <div css={s.title}>
                <h1>급상승! 많이 보고 있는 작품</h1>

            </div>
            <div css={s.container}>
                {
                    popularBooks.map(book => 
                        <div css={s.item} key={book.bookId}>
                            <div css={s.bookImage}>
                                <img src={book.coverImgUrl} alt="" />
                            </div>
                            <div css={s.bookInfo}>
                                <div css={s.categoryName}>{book.categoryName}</div>
                                <div css={s.bookName}>{book.bookName}</div>
                                <div css={s.authorAndPublisher}>{book.authorName} - {book.publisherName}</div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
}

export default Home;