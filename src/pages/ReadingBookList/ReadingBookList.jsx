/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { getReadingCountRequest, getReadingDataRequest } from "../../apis/api/mypage";
import * as s from "./style"
import { useQuery } from "react-query";
import { BsCheckCircle } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import WishPageNumbers2 from "../WishPageNumbers/WishPageNumbers2";
import { Link, useSearchParams } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import ReadingPageNumbers from "../ReadingPageNumbers/ReadingPageNumbers";

function ReadingBookList(data) {
    const id = data.data.data.userId;

    const [ readingBookList, setReadingBookList ] = useState([]);
    const [ searchParams, setSearchParams ] = useSearchParams();

    const [ searchCondition, setSearchCondition ] = useState({
        userid: id,
        page: parseInt(searchParams.get("page")),
        // count: searchCount,
        // option: parseInt(searchParams.get("option")),
    });

    useEffect(() => {
        setSearchCondition(searchCondition => {
            return {
                ...searchCondition,
                page: parseInt(searchParams.get("page"))
            }
        })
    }, [searchParams])

    const getReadingBooksQuery = useQuery(
        ["getReadingBooksQuery", searchCondition],
        async () => await getReadingDataRequest(searchCondition),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data);
                setReadingBookList(response.data.reading)
            },
            onError: error => {
                console.log("error");
            }
        }
    );

    const getReadingBooksCountQuery = useQuery(
        ["getReadingBooksCountQuery", readingBookList],
        async () => await getReadingCountRequest(searchCondition),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data);
            }
        }
    )

    // !searchWishQuery.isLoading &&
    // console.log(searchWishQuery.data);
    return (
        <>
            <div css={s.header}>
                <Link css={s.filter} to={"/mypage/reading?page=1&option=0"}>전체(book_id)</Link>
                <Link css={s.filter} to={"/mypage/reading?page=1&option=1"}>평점높은순</Link>
                <Link css={s.filter} to={"/mypage/reading?page=1&option=2"}>평점낮은순</Link>
                <Link css={s.filter} to={"/mypage/reading?page=1&option=3"}>리뷰많은순</Link>
                <Link css={s.filter} to={"/mypage/reading?page=1&option=4"}>리뷰적은순</Link>
                    <button css={s.deleteBtn}>
                        <RiDeleteBin6Line />
                    </button>
            </div>
            <div css={s.container}>
                {!getReadingBooksQuery.isLoading &&
                    readingBookList.length === 0 
                    ? <h1>대출 중인 도서가 없습니다.</h1>
                    : readingBookList.map(loan => 
                        <div css={s.data} key={loan.loanId}>
                            <div css={s.bookData}>
                                <div css={s.checkBox}>
                                    <button css={s.checkBtn}>
                                        <BsCheckCircle size={"20"} color="#adadad" />
                                    </button>
                                </div>
                                <div css={s.bookImage}>
                                    <img src={loan.imageUrl}></img>
                                </div>
                                <div css={s.bookInfo}>
                                    <div css={s.bookName}>{loan.bookName}</div>
                                    <div css={s.authorName}>{loan.authorName}</div>
                                    <div css={s.publisherName}>{loan.publisherName}</div>
                                </div>
                                <div css={s.removeBox}>
                                    <IoMdClose size={"17"} color={"#adadad"}/>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {!getReadingBooksCountQuery.isLoading &&
                <div css={s.page}>
                    <ReadingPageNumbers data={getReadingBooksCountQuery.data?.data}/>
                </div>
            }
        </>
    );
}

export default ReadingBookList;