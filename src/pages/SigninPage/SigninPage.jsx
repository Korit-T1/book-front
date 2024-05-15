/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link } from "react-router-dom";
import { useInput } from "../../hooks/userInput";
import { useMutation } from "react-query";
import { signinRequest } from "../../apis/api/signin";
import AuthPageInput2 from "../../components/AuthPageInput2/AuthPageInput2";

function SigninPage(props) {
    const [ username, usernameChange ] = useInput();
    const [ password, passwordChange ] = useInput();

    const signinMutation = useMutation({
        mutationKey: "signinMutation",
        mutationFn: signinRequest,
        onSuccess: response => {
            const accessToken = response.data;
            localStorage.setItem("AccessToken", accessToken);
            window.location.replace("/")
        },
        onError: error => {
            alert(error.response.data);
        }
    })

    const handleSigninSubmit = () => {
        signinMutation.mutate({
            username,
            password
        });
    } 

    return (
        <>
            <div css={s.layout}>
                <h1>BookDrop</h1>
                <AuthPageInput2
                    type={"text"}
                    name={"username"}
                    placeholder={"아이디를 입력해 주세요."}
                    value={username}
                    onChange={usernameChange}
                />
                <AuthPageInput2
                    type={"password"}
                    name={"password"}
                    placeholder={"비밀번호를 입력해 주세요."}
                    value={password}
                    onChange={passwordChange}
                />
                <div css={s.find}>
                    <Link to={"/searchUserInfo/findId"}>아이디 찾기</Link>
                    |
                    <Link to={"/searchUserInfo/findPw"}>비밀번호 찾기</Link>
                </div>
                <div css={s.btns}>
                    <button css={s.buttonUp} onClick={handleSigninSubmit}>로그인</button>
                    <button css={s.buttonDown}><Link to={"/usersignup"}>회원가입</Link></button>
                </div>
            </div>
            <div css={s.footer1}>
                <p>© BOOKDROP CENTRE</p>
            </div>
        </>
    );
}

export default SigninPage;