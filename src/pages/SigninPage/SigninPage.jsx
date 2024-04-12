/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link } from "react-router-dom";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useInput } from "../../hooks/userInput";
import { useMutation } from "react-query";
import { signinRequest } from "../../apis/api/signin";

function SinginPage(props) {
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
                <h1>LOGO</h1>
                <AuthPageInput
                    type={"text"}
                    name={"username"}
                    placeholder={"아이디"}
                    value={username}
                    onChange={usernameChange}
                />
                <AuthPageInput
                    type={"password"}
                    name={"password"}
                    placeholder={"비밀번호"}
                    value={password}
                    onChange={passwordChange}
                />
                <button onClick={handleSigninSubmit}>로그인</button>
                <button><Link to={"/signup"}>회원가입</Link></button>
            </div>
        </>
        
    );
}

export default SinginPage;