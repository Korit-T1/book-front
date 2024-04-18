/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { getWishDataRequest } from "../../apis/api/mypage";
import * as s from "./style"
import { useQuery } from "react-query";

function WishList(data) {
    const [ wishList, setWishList ] = useState([]);

    const searchWishQuery = useQuery(
        ["searchWishQuery", data?.data?.userId],
        async () => await getWishDataRequest(data.data.userId),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setWishList(response.data)
                console.log(response.data);
            },
            onError: error => {
                console.log("error");
            }
        }
    );

    return (
        <>
            {!searchWishQuery.isLoading &&
                <table css={s.wishTable}>
                    <thead>
                        <tr>
                            <th>위시번호</th>
                            <th>제목</th>
                            <th>저자</th>
                            <th>출판사</th>
                            <th>이미지 URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishList.map(
                            wish => 
                                <tr key={wish.wishId}>
                                    <td>{wish.wishId}</td>
                                    <td>{wish.book.bookName}</td>
                                    <td>{wish.book.authorName}</td>
                                    <td>{wish.book.publisherName}</td>
                                    <td>{wish.book.coverImgUrl}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            }
        </>
    );
}

export default WishList;