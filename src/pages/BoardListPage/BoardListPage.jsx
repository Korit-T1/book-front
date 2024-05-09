import { useRef, useState } from "react";
import * as s from "./style";
import { Link, useSearchParams } from "react-router-dom";
import { getNoticeAll, noticeCount } from "../../apis/api/notice";
import { useQuery } from "react-query";
import { FaSearch } from "react-icons/fa";


function BoardListPage(props) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ searchData, setSearchData ] = useState({
        page: parseInt(searchParams.get("page")),
        option: parseInt(searchParams.get("option")),
        text: searchParams.get("text")
    });

    const inputRef = useRef();

    const handleSearchDataChange = (e) => {
        setSearchData(searchData => {
            return {
                ...searchData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSearchInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            console.log("test")
            searchSubmit();
        }
    }

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

    const noticeCountQuery = useQuery(
        ["noticeCountQuery", noticeListQuery.data],
        async () => await noticeCount({
            option: parseInt(searchParams.get("option")),
            text: searchParams.get("text") 
        }),
        {
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data);
            }
        }
    )

    // 날짜를 원하는 형식으로 변환하는 함수
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const searchSubmit = () => {
    
        window.location.replace(`/boardList?page=1&option=${searchData.option}&text=${searchData.text}`);
    }


    return (
        <div css={s.layout}>
            <h1 css={s.headerTitle}>게시글 목록</h1>
            <div>
                <select name="option" value={searchData.option} onChange={handleSearchDataChange}>
                    <option value="0">제목</option>
                    <option value="1">공지사항</option>
                    <option value="2">이벤트</option>
                </select>
                <input
                    type="text"
                    name="text"
                    value={searchData.text}
                    onChange={handleSearchDataChange}
                    onKeyDown={handleSearchInputKeyDown}
                    ref={inputRef}
                />
                <div onClick={() => searchSubmit()}>
                    <FaSearch />
                </div>
            </div>
            <ul css={s.boardListLayout}>
                <li css={s.boardListHeader}>
                    <div>번호</div>
                    <div>종류</div>
                    <div>제목</div>
                    <div>게시일</div>
                </li>
                {noticeListQuery.data &&
                    noticeListQuery.data.data.map((notice) => (
                        <li key={notice.noticeBoardId} css={s.boardListItem}>
                            <div>{notice.noticeBoardId}</div>
                            <div>{notice.noticeBoardCategoryName}</div>
                            <div>
                                <Link to={`/boardDetail/${notice.noticeBoardId}`}>{notice.title}</Link>
                            </div>
                            <div>{formatDate(notice.createDate)}</div>
                        </li>
                    ))}
            </ul>
            <div>
                <Link to="/admin/boardWrite">
                    <button>글 쓰기</button>
                </Link>
            </div>
        </div>
    );
}

export default BoardListPage;
