/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { useQuery } from "react-query";
import { getNotice } from "../../apis/api/notice";



function BoardDetailPage(props) {
    const [ notice, setNotice ] = useState([]);
    
    const noticeQuery = useQuery(
        ["noticeQuery"],
        () => getNotice(),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                setNotice(response?.data);
            },
            retry: 0
        }
    )


    return (
        <>
            <div css={s.detailContainer}>
                <h2 css={s.title}>{notice.title}</h2>
                <div css={s.content}>
                    {notice.content}
                </div>
                <p css={s.date}>게시일: {notice.createDate}</p>
            </div>
        </>
    );
}


export default BoardDetailPage;