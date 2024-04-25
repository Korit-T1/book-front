/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { getWishCountRequest, getWishDataRequest } from "../../apis/api/mypage";
import * as s from "./style"
import { useQuery } from "react-query";
import { BsCheckCircle } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import WishPageNumbers2 from "../WishPageNumbers/WishPageNumbers2";
import { Link, useSearchParams } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";


function WishList(data) {
    const id = data.data.data.userId;

    const [ wishList, setWishList ] = useState([]);
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

    const searchWishQuery = useQuery(
        ["searchWishQuery", searchCondition],
        async () => await getWishDataRequest(searchCondition),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data);
                setWishList(response.data.wishList)
            },
            onError: error => {
                console.log("error");
            }
        }
    );

    const getWishCountQuery = useQuery(
        ["getWishCountQuery", wishList],
        async () => await getWishCountRequest(searchCondition),
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
                <Link css={s.filter} to={"/mypage/wish?page=1&option=0"}>전체(book_id)</Link>
                <Link css={s.filter} to={"/mypage/wish?page=1&option=1"}>평점높은순</Link>
                <Link css={s.filter} to={"/mypage/wish?page=1&option=2"}>평점낮은순</Link>
                <Link css={s.filter} to={"/mypage/wish?page=1&option=3"}>리뷰많은순</Link>
                <Link css={s.filter} to={"/mypage/wish?page=1&option=4"}>리뷰적은순</Link>
                    <button css={s.deleteBtn}>
                        <RiDeleteBin6Line />
                    </button>
            </div>
            <div css={s.container}>
                {!searchWishQuery.isLoading &&
                    wishList.map(wish => 
                        <div css={s.data} key={wish.wishId}>
                            <div css={s.bookData}>
                                <div css={s.checkBox}>
                                    <BsCheckCircle size={"20"} color="#adadad"/>
                                </div>
                                <div css={s.bookImage}>
                                    <img src={wish.imageUrl}></img>
                                </div>
                                <div css={s.bookInfo}>
                                    <div css={s.bookName}>{wish.bookName}</div>
                                    <div css={s.authorName}>{wish.authorName}</div>
                                    <div css={s.publisherName}>{wish.publisherName}</div>
                                </div>
                                <div css={s.removeBox}>
                                    <IoMdClose size={"17"} color={"#adadad"}/>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {!getWishCountQuery.isLoading &&
                <div css={s.page}>
                    <WishPageNumbers2 data={getWishCountQuery.data?.data}/>
                </div>
            }
        </>
    );
}

export default WishList;