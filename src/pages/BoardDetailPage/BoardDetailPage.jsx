import { useState } from "react";
import * as s from "./style";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom"; // useParams 추가
import { getNotice } from "../../apis/api/notice";

function BoardDetailPage(props) {
    const { noticeBoardId } = useParams(); // useParams를 사용하여 noticeBoardId 가져오기
    const [notice, setNotice] = useState(null);

    const noticeQuery = useQuery(
        ["noticeQuery", noticeBoardId],
        () => getNotice(noticeBoardId),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                setNotice(response?.data);
            },
            onError: error => {
                console.log("error");
            }
        }
    );

    return (
        <>
            {notice && (
                <div css={s.detailContainer}>
                    <h2 css={s.title}>{notice.title}</h2>
                    <div css={s.content}>
                        {notice.content}
                    </div>
                    <p css={s.date}>게시일: {notice.createDate}</p>
                </div>
            )}
        </>
    );
}

export default BoardDetailPage;
