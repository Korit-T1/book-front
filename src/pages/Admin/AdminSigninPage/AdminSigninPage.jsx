/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AuthPageInput from '../../../components/AuthPageInput/AuthPageInput';
import { useInput } from "../../../hooks/userInput";
import { useMutation } from "react-query";
import { adminSigninRequest } from "../../../apis/api/signin";
import { IoPersonCircleSharp } from "react-icons/io5";


function AdminsigninPage(props) {
    const [ username, usernameChange ] = useInput();
    const [ password, passwordChange ] = useInput();

    const adminSigninMutation = useMutation({
        mutationKey: "adminSigninMutation",
        mutationFn: adminSigninRequest,
        onSuccess: response => {
            const accessToken = response.data;
            localStorage.setItem("AccessToken", accessToken);
            window.location.replace("/admin")
        },
        onError: error => {
            alert(error.response.data);
        }
    })

    const handleAdminSigninSubmit = () => {
        adminSigninMutation.mutate({
            username,
            password
        });
    }

    return (
        <>
            <div css={s.background}>
                <div css={s.layout}>
                    
                    <h1>관리자 로그인</h1>
                    <AuthPageInput
                        style={s.inputBox}
                        type={"text"}
                        name={"username"}
                        placeholder={"아이디"}
                        value={username}
                        onChange={usernameChange}
                        
                    />
                    <AuthPageInput 
                        style={s.inputBox}
                        type={"password"}
                        name={"password"}
                        placeholder={"비밀번호"}
                        value={password}
                        onChange={passwordChange}
                    />
                    <br/><button onClick={handleAdminSigninSubmit}>로그인</button>
                </div>            
            </div>
        </>
    );
}

export default AdminsigninPage;