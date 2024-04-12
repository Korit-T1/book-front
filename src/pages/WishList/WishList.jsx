/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { getWishDataRequest } from "../../apis/api/mypage";
import * as s from "./style"
import { useQuery } from "react-query";

function WishList(data) {
    const [ wishList, setWishList ] = useState([]);

    const searchWishQuery = useQuery(
        ["searchWishQuery", data?.data?.username],
        async () => await getWishDataRequest(data.data.username),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setWishList(response.data);
                console.log(response.data)
            },
            onError: error => {
                console.log(error);
            }
        }
    );

    return (
        <table css={s.wishTable}>
                <thead>
                    <tr>
                        <th>위시번호</th>
                        <th>유저번호</th>
                        <th>도서번호</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wishList.map(
                            wish => 
                                <tr key={wish.wishId}>
                                    <td>{wish.wishId}</td>
                                    <td>{wish.userId}</td>
                                    <td>{wish.bookId}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
    );
}

export default WishList;