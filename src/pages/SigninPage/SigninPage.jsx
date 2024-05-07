/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link } from "react-router-dom";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useInput } from "../../hooks/userInput";
import { useMutation } from "react-query";
import { signinRequest } from "../../apis/api/signin";
// import { gradientColor } from "../../pages/GradientColor/GradientColor";


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
                <h1>Book Drop</h1>
                <AuthPageInput

                    type={"text"}
                    name={"username"}
                    placeholder={"아이디를 입력해주세요"}
                    value={username}
                    onChange={usernameChange}
                    
                />
                <AuthPageInput

                    type={"password"}
                    name={"password"}
                    placeholder={"비밀번호를 입력해주세요"}
                    value={password}
                    onChange={passwordChange}

                />

                <button onClick={handleSigninSubmit} css={s.section1}>로그인</button>
                
                <div css={s.find}>
                <button css={s.findID}>아이디 찾기</button>
                <button css={s.findPW}>비밀번호 찾기</button>
                </div>
                
                <button css={s.section2}><Link to={"/usersignup"}>회원가입</Link></button>
            </div>
            
            <div css={s.footer1}>
                <p>© Book Drop Centre</p>
            </div>
        </>
        
    );
}

export default SinginPage;





/*
<HTML 코드#2>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Login #2 | AsmrProg</title>
</head>
<body>

    <div class="login">
        <img src="bg.jpg" alt="">
        <h3>Welcome Back!</h3>
        <h2>AsmrProg</h2>
        <form class="login-form">
            <input type="password" placeholder="Enter your passcode">
            <button type="submit">LOGIN</button>
            <a href="#">Forget your passcode?</a>
        </form>
    </div>
    
</body>
</html>
*/