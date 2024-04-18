/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import MainContainer from "../MainContainer/MainContainer";
import * as s from "./style"

function SearchHeader() {
    return (
        <div css={s.headerLayout}>
            <MainContainer>
                <header css={s.header}>
                    <div css={s.headerLeft}>
                        <Link css={s.brandLogo}>
                            북드롭
                        </Link>
                        <ul css={s.menuNav}>
                            <Link to={"/search?page=1&option=0&text="}><li>통합검색</li></Link>
                            <Link><li>공지사항</li></Link>
                            <Link><li>게시판</li></Link>
                            <Link><li>이용안내</li></Link>
                        </ul>
                    </div>
                    <Link css={s.accountNav}>
                        <div css={s.accountBox}></div>
                    </Link>
                </header>
            </MainContainer>
        </div>
    );
}

export default SearchHeader;