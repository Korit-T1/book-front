/** @jsxImportSource @emotion/react */
import { useQueryClient } from "react-query";
import * as s from "./style"
import { useEffect, useState } from "react";
import instance from "../../apis/utils/instance";
import { Link } from "react-router-dom";

function Header(props) {
    const [ isLogin,  setLogin ] = useState(false);
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
            <div css={s.header}>
                <h1>HEADER</h1>
                {
                   isLogin 
                    ? 
                    <><button onClick={handleLogoutClick}>로그아웃</button>
                    <Link to="/mypage"><button>마이페이지</button></Link></>
                    : 
                    <Link to="/signin"><button>로그인 / 회원가입</button></Link>
                }
            </div>
        </div>
    );
}

export default Header;