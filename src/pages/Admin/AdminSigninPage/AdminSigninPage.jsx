/** @jsxImportSource @emotion/react */
import * as s from "./style";

import AuthPageInput from '../../../components/AuthPageInput/AuthPageInput';
import { useInput } from "../../../hooks/userInput";
import { useMutation } from "react-query";
import { adminSigninRequest } from "../../../apis/api/signin";


function AdminsigninPage(props) {
    const [ username, usernameChange ] = useInput();
    const [ password, passwordChange ] = useInput();

    const adminSigninMutation = useMutation({
        mutationKey: "adminSigninMutation",
        mutationFn: adminSigninRequest,
        onSuccess: response => {
            const accessToken = response.data;
            localStorage.setItem("AccessAdminToken", accessToken);
            window.location.replace("/")
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
            <div>
                <h1>관리자 로그인</h1>
                <button onClick={handleAdminSigninSubmit}>로그인 하기</button>
            </div>
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
        </>
    );
}

export default AdminsigninPage;