/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./style";

function BoardListPage(props) {
    return (
        <div css={s.layout}>
            <h1 css={s.headerTitle}>게시글 목록</h1>
            <ul css={s.boardListLayout}>
                <li css={s.boardListHeader}>
                    <div>번호</div>
                    <div>제목</div>
                </li>
            </ul> 
            <div>
                <Link to={'/boardWrite'}>
                    <button>글 쓰기</button>
                </Link>
            </div>
        </div>
    );
}

export default BoardListPage;