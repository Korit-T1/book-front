import { useState } from "react";
import * as s from "./style";
import { Link, useSearchParams } from "react-router-dom";
import { getNoticeAll } from "../../apis/api/notice";
import { useQuery } from "react-query";


function BoardListPage(props) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ searchData, setSearchData ] = useState({
        page: parseInt(searchParams.get("page")),
        option: parseInt(searchParams.get("option")),
        text: searchParams.get("text")
    });


    // 게시글 목록을 가져오는 쿼리 훅 사용
    const noticeListQuery = useQuery(
        ["noticeListQuery"],
        async () => getNoticeAll(searchData),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                console.log(response.data);
            }
        }
    )

    return (
        <div css={s.layout}>
            <h1 css={s.headerTitle}>게시글 목록</h1>
            <ul css={s.boardListLayout}>
                <li css={s.boardListHeader}>
                    <div>번호</div>
                    <div>제목</div>
                    <div>게시판 종류</div>
                    <div>게시일</div>
                    
                </li>
                {/* 게시글 목록 데이터를 가져와서 리스트 항목으로 매핑 */}
                {noticeListQuery.data && noticeListQuery.data.map(notice => (
                    <li key={notice.noticeBoardId} css={s.boardListItem}>
                        <div>{notice.noticeBoardId}</div>
                        <div>
                            {/* 게시글 상세 페이지로 이동하는 링크 */}
                            <Link to={`/boardDetail/${notice.noticeBoardId}`}>{notice.title}</Link>
                        </div>
                        <div>{notice.noticeBoardCategoryName}</div>
                        <div>{notice.createDate}</div>
                    </li>
                ))}
            </ul>
            <div>
                <Link to={'/admin/boardWrite'}>
                    <button>글 쓰기</button>
                </Link>
            </div>
        </div>
    );
}

export default BoardListPage;
