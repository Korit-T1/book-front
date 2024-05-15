/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { Link } from "react-router-dom";
import MainContainer from "../MainContainer/MainContainer";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import instance from "../../apis/utils/instance";
import { RiUserLine } from "react-icons/ri";



function SearchHeader() {
    const [ isLogin, setLogin ] = useState(false);
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const principalData = queryClient.getQueryData("principalQuery");

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
                        <ul css={s.menuNav}>
                            <Link to={"/search?page=1&option=0&filter=1&text="}><li>통합검색</li></Link>
                            <Link to={"/boardList?page=1&option=0&text="}><li>공지사항</li></Link>
                            {/* <Link><li>게시판</li></Link> */}
                            <Link><li>이용안내</li></Link>
                        </ul>
                    </div>
                    <div css={s.headerCenter}>
                        <Link css={s.brandLogo} to={"/"}>
                            <p>BookDrop</p>
                        </Link>
                    </div>
                    <div css={s.headerRight}>
                        <ul css={s.menuNav}>
                            {/* <Link><li>Q&A</li></Link> */}
                            <Link><li>FAQ</li></Link>
                            <Link to={"/signUp"}><li>회원가입</li></Link>
                            {!isLogin 
                                ? <Link to={"/userlogin"}><li>로그인</li></Link>
                                : <Link onClick={() => handleLogoutClick()}><li>로그아웃</li></Link>
                            }
                        </ul>
                        <Link css={s.accountNav} to={isLogin ? "/mypage" : "/userlogin"}>
                            <div css={s.accountBox}>
                                {principalData
                                    ? <img src={principalData.data.profileUrl} alt=""/>
                                    : <RiUserLine size={30} color="white"/>
                                }
                            </div>
                        </Link>
                    </div>
                </header>
            </MainContainer>
        </div>
    );
}

export default SearchHeader;