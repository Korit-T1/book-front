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
import { MdStarRate } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";

function WishList(data) {
    const id = data.data.data.userId;

    const [ searchParams ] = useSearchParams();
    const [ wishList, setWishList ] = useState([]);

    const [ activeFilter, setActiveFilter ] = useState(1);

    const handleFilterClick = (filterID) => {
        if(filterID !== activeFilter) {
            setActiveFilter(filterID);
        }
    };

    const [ searchCondition, setSearchCondition ] = useState({
        userid: id,
        page: parseInt(searchParams.get("page")),
        filter: parseInt(searchParams.get("filter"))
    });

    useEffect(() => {
        setSearchCondition(searchCondition => {
            return {
                ...searchCondition,
                page: parseInt(searchParams.get("page")),
                filter: parseInt(searchParams.get("filter"))
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

    return (
        <>
            <div css={s.header(activeFilter)}>
                <div>
                    <Link css={s.filter} to={"/mypage/wish?page=1&filter=1"}
                    onClick={() => handleFilterClick(1)}>전체(wish_id)</Link>
                </div>
                <div>
                    <Link css={s.filter} to={"/mypage/wish?page=1&filter=2"}
                    onClick={() => handleFilterClick(2)}>평점높은순</Link>
                </div>
                <div>
                    <Link css={s.filter} to={"/mypage/wish?page=1&filter=3"}
                    onClick={() => handleFilterClick(3)}>평점낮은순</Link>
                </div>
                <div>
                    <Link css={s.filter} to={"/mypage/wish?page=1&filter=4"}
                    onClick={() => handleFilterClick(4)}>리뷰많은순</Link>
                </div>
                <div>
                    <Link css={s.filter} to={"/mypage/wish?page=1&filter=5"}
                    onClick={() => handleFilterClick(5)}>리뷰적은순</Link>
                </div>
            </div>
                    {/* <button css={s.deleteBtn}>
                        <RiDeleteBin6Line />
                    </button> */}
            <div css={s.container}>
                {searchWishQuery.isLoading && getWishCountQuery.isLoading? <></>
                    : wishList.map(wish => 
                        <div css={s.data} key={wish.wishId}>
                            <div css={s.bookData}>
                                <div css={s.checkBox}>
                                    <button css={s.checkBtn}>
                                        <BsCheckCircle size={"20"} color="#adadad" />
                                    </button>
                                </div>
                                <div css={s.bookImage}>
                                    <img src={wish.imageUrl} alt=""></img>
                                </div>
                                <div css={s.bookInfo}>
                                    <div css={s.top}>
                                        <div css={s.bookName}>{wish.bookName}</div>
                                        <div css={s.authorName}>{wish.authorName}</div>
                                        <div css={s.publisherName}>{wish.publisherName}</div>
                                    </div>
                                    <div css={s.bot}>
                                        <div css={s.rating}>
                                            <div css={s.starBox}><MdStarRate color="red" size={25}/></div>
                                            <span css={s.rateBox}>{Math.floor(wish.avgRating * 2 * 10) / 10}</span>
                                        </div>
                                        <div css={s.review}>
                                            <BiCommentDetail color="#607fe4" size={22}/>
                                            <span>{wish.reviewCount}</span>
                                        </div>
                                    </div>
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