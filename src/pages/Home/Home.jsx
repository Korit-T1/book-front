/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style"
import { useQuery } from "react-query";
import { getNewBooksRequest, getPopularBooksRequest, getTopFiveBooksRequest } from "../../apis/api/bookApi";
import { Bs1Square } from "react-icons/bs";
import { GiImperialCrown } from "react-icons/gi";
import { MdFiberNew } from "react-icons/md";
import { Bs2SquareFill } from "react-icons/bs";
import { Bs3SquareFill } from "react-icons/bs";
import { Bs4SquareFill } from "react-icons/bs";
import { Bs5SquareFill } from "react-icons/bs";
import BookDetailModal from "../../components/BookDetailModal/BookDetailModal";
import ImageSilder from "../../components/ImageSilder/ImageSilder";
import rank from "../../assets/rank.png"
import graph from "../../assets/graph.png"

function Home() {
    const [ popularBooks, setPopularBooks ] = useState([]);
    const [ topFiveBooks, setTopFiveBooks ] = useState([]);
    const [ newBooks , setNewBooks ] = useState([]);
    const [ isOpen, setIsOpen ] = useState(false);
    const [ selectedBook, setSelectedBook ] = useState();

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

    const getNewBooksQuery = useQuery(
        ["getNewBooksQuery"],
        async () => await getNewBooksRequest(),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data);
                setNewBooks(response.data);
            }
        }
    );

    return (
        <>
            <div css={s.layout}>
                <ImageSilder />
                <div css={s.title}>
                    <h1>인기 급상승! 많이 보고 있는 작품</h1>
                    <div css={s.graph}>
                        <img src={graph} alt="" />
                    </div>
                    {/* <FcBullish size={64} css={s.graph}/> */}
                </div>
                <div css={s.container}>
                    {
                        popularBooks.map(book => 
                            <div css={s.item} key={book.bookId} onClick={() => {
                                setIsOpen(() => true);
                                setSelectedBook(() => book);
                                            }
                                        }>
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
                <div css={s.title2}>
                    <h1>금주의 Top 5</h1>
                    <div css={s.ranking}>
                        <img src={rank} alt=""/>
                    </div>
                </div>
                <div css={s.containerRank}>
                    {
                        topFiveBooks.map((book, index) => 
                            <div css={s.Rank(index)} key={book.bookId} onClick={() => {
                                setIsOpen(() => true);
                                setSelectedBook(() => book);
                                }
                            }
                            >
                                <div css={s.first}>
                                    <div css={s.first2}>
                                        <img src={book.coverImgUrl} alt=""/>
                                        {
                                            index === 0 ? 
                                            <>
                                                <div css={s.aa()}>
                                                    <Bs1Square css={s.num1} size={21} color="white"/>
                                                    <GiImperialCrown size={24} color="white" />
                                                </div>
                                            </>
                                            : index === 1 ? <Bs2SquareFill css={s.num} color="gray" size={21}/>
                                            : index === 2 ? <Bs3SquareFill css={s.num} color="gray" size={21}/>
                                            : index === 3 ? <Bs4SquareFill css={s.num} color="gray" size={21}/>
                                            : <Bs5SquareFill css={s.num} size={21} color="gray"/>
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
                    <h1>화제의 신상</h1>
                    <MdFiberNew css={s.newIcon()} size={55} color="#ee4242"/>
                </div>
                <div css={s.containerNew}>
                    {
                        newBooks.map(book => 
                            <div css={s.itemNew} key={book.bookId} onClick={() => {
                                setIsOpen(() => true);
                                setSelectedBook(() => book);
                                            }
                                        }>
                                <div css={s.bookImage2}>
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
            <BookDetailModal book={selectedBook} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    );
}

export default Home;