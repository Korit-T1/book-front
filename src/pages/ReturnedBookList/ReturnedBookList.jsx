/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { getReturnedCountRequest, getReturnedDataRequest } from "../../apis/api/mypage";
import * as s from "./style"
import { useQuery } from "react-query";
import { BsCheckCircle } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import WishPageNumbers2 from "../WishPageNumbers/WishPageNumbers2";
import { Link, useSearchParams } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import ReturnedPageNumbers from "../ReturnedPageNumbers/ReturnedPageNumbers";

function ReturnedBookList(data) {
    const id = data.data.data.userId;

    const [ returnedBookList, setReturnedBookList ] = useState([]);
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

    const getReturnedBooksQuery = useQuery(
        ["getReturnedBooksQuery", searchCondition],
        async () => await getReturnedDataRequest(searchCondition),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data);
                setReturnedBookList(response.data.returned)
            },
            onError: error => {
                console.log("error");
            }
        }
    );

    const getReturnedBooksCountQuery = useQuery(
        ["getReturnedBooksCountQuery", returnedBookList],
        async () => await getReturnedCountRequest(searchCondition),
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
                <Link css={s.filter} to={"/mypage/returned?page=1&option=0"}>전체(book_id)</Link>
                <Link css={s.filter} to={"/mypage/returned?page=1&option=1"}>평점높은순</Link>
                <Link css={s.filter} to={"/mypage/returned?page=1&option=2"}>평점낮은순</Link>
                <Link css={s.filter} to={"/mypage/returned?page=1&option=3"}>리뷰많은순</Link>
                <Link css={s.filter} to={"/mypage/returned?page=1&option=4"}>리뷰적은순</Link>
                    <button css={s.deleteBtn}>
                        <RiDeleteBin6Line />
                    </button>
            </div>
            <div css={s.container}>
                {!getReturnedBooksQuery.isLoading &&
                    returnedBookList.map(loan => 
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
            {!getReturnedBooksCountQuery.isLoading &&
                <div css={s.page}>
                    <ReturnedPageNumbers data={getReturnedBooksCountQuery.data?.data}/>
                </div>
            }
        </>
    );
}

export default ReturnedBookList;