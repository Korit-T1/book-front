/** @jsxImportSource @emotion/react */
import * as s from "./style";

function SigninPage(props) {
    return (
        <div css={s.layout}>
            <h1>로그인 페이지 입니다.</h1>
            <div css={s.loginBox}>
                <div css={s.inputBox}>
                    <input type="text" placeholder={"아이디"}/>
                </div>
                <div css={s.inputBox}>
                    <input type="password" placeholder={"비밀번호"}/>
                    
                </div>
            </div>
        </div>
    );
}

export default SigninPage;