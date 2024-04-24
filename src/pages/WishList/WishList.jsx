/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { getWishDataRequest } from "../../apis/api/mypage";
import * as s from "./style"
import { useQuery } from "react-query";

function WishList(data) {
    const id = data.data.data.userId;
    const [ wishList, setWishList ] = useState([]);

    const searchWishQuery = useQuery(
        ["searchWishQuery"],
        async () => await getWishDataRequest(id),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data);
                setWishList(response.data)
            },
            onError: error => {
                console.log("error");
            }
        }
    );
    // !searchWishQuery.isLoading &&
    return (
        <>
            <div css={s.header}>헤더</div>
            <div css={s.container}>
                {
                    wishList.map(wish => 
                        <div css={s.data} key={wish.wishId}>
                            <div css={s.bookData}>
                                <div css={s.bookImage}>
                                    <img src={wish.imageUrl}></img>
                                </div>
                                <div css={s.bookInfo}>
                                    <div css={s.bookName}>{wish.bookName}</div>
                                    <div css={s.authorName}>{wish.authorName}</div>
                                    <div css={s.publisherName}>{wish.publisherName}</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div css={s.page}>페이지</div>
        </>
    );
}

export default WishList;