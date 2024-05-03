/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { Link } from "react-router-dom";
import MainContainer from "../MainContainer/MainContainer";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import instance from "../../apis/utils/instance";

function SearchHeader() {
    const [ isLogin, setLogin ] = useState(false);
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");

    useEffect(() => {
        setLogin(() => principalQueryState.status === "success");
    }, [principalQueryState.status]);

    const handleLogoutClick = () => {
        localStorage.removeItem("AccessToken");
        instance.interceptors.request.use((config) => {
            config.headers.Authorization = null;
            return config;
        })
        queryClient.removeQueries("principalQuery");
        window.location.replace("/");
    }

    return (
        <div css={s.headerLayout}>
            <MainContainer>
                <header css={s.header}>
                    <div css={s.headerLeft}>
                        <Link css={s.brandLogo} to={"/"}>
                            BookDrop
                        </Link>
                        <ul css={s.menuNav}>
                            <Link to={"/search?page=1&option=0&filter=0&text="}><li>통합검색</li></Link>
                            <Link><li>공지사항</li></Link>
                            <Link><li>게시판</li></Link>
                            <Link><li>이용안내</li></Link>
                        </ul>
                    </div>
                    {
                        isLogin && <button onClick={handleLogoutClick}>로그아웃</button>
                    }
                    <Link css={s.accountNav} to={isLogin ? "/mypage " : "/userlogin"}>
                        <div css={s.accountBox}></div>
                    </Link>
                </header>
            </MainContainer>
        </div>
    );
}

export default SearchHeader;