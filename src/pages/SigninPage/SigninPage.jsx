/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link } from "react-router-dom";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useInput } from "../../hooks/userInput";
import { useMutation } from "react-query";
import { signinRequest } from "../../apis/api/signin";
import GradientColor from "../../components/GradientColor/GradientColor";
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
        <GradientColor/>
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