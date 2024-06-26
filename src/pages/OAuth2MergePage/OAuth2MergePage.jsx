/** @jsxImportSource @emotion/react */
import { useSearchParams } from "react-router-dom";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import * as s from "./style";
import { useMutation } from "react-query";
import { oAuth2MergeRequest } from "../../apis/api/oAuth2Merge";



function OAuth2MergePage(props) {
    const [ searchParmas ] = useSearchParams();
    const [username, usernameChange ] = useInput();
    const [ password, passwordChange ] = useInput();

    const oAuth2MergeMutation = useMutation({
        mutationKey: "oAuth2MergeMutation",
        mutationFn: oAuth2MergeRequest,
        onSuccess: response => {
            alert("계정 통합 완료.\n 다시 로그인 해주세요.")
            window.location.replace("/auth/signin");
        },
        onError: error => {
            alert(error.response.data);
        }
    })

    const handleSigninSubmit = () => {
        oAuth2MergeMutation.mutate({
            username,
            password,
            oauth2Name: searchParams.get("name"),
            providerName: searchParams.get("provider")
        });
    }

    return (
        <>
            <div>
                <h1>계정 통합 로그인</h1>
                <button onClick={handleSigninSubmit}>로그인</button>
            </div>
            <AuthPageInput 
                type={"text"}
                name={"username"}
                placeholder={"사용자이름"}
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

export default OAuth2MergePage;