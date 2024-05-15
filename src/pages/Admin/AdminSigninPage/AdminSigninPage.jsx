/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useInput } from "../../../hooks/userInput";
import { useMutation } from "react-query";
import { adminSigninRequest } from "../../../apis/api/signin";
import AuthPageInput2 from "../../../components/AuthPageInput2/AuthPageInput2";
import LOGO from "../../../assets/adminLOGO.png"
import KEY from "../../../assets/adminKEY.png"

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
                    <div css={s.image}>
                        <img src={LOGO} alt="" />
                    </div>
                    <AuthPageInput2
                        style={s.inputBox}
                        type={"text"}
                        name={"username"}
                        placeholder={"ID"}
                        value={username}
                        onChange={usernameChange}
                    />  
                    <AuthPageInput2
                        style={s.inputBox}
                        type={"password"}
                        name={"password"}
                        placeholder={"PW"}
                        value={password}
                        onChange={passwordChange}
                    />
                    <div css={s.go} onClick={() => handleAdminSigninSubmit()}>
                        <img src={KEY} alt=""></img>
                    </div>
                    
                </div>            
            </div>
        </>
    );
}

export default AdminsigninPage;