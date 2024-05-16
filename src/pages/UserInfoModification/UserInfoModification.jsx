/** @jsxImportSource @emotion/react */
import * as s from "./style"
import AuthPageInput2 from '../../components/AuthPageInput2/AuthPageInput2';
import { useMutation } from "react-query";
import { useInput } from "../../hooks/userInput"
import { editPasswordRequest } from "../../apis/api/editPassword";
import { Link } from "react-router-dom";

function UserInfoModification(data) {
    const [ oldPassword, handleOldPassword, oldMessage, setOld, setOldMessage ] = useInput("oldPassword");
    const [ newPassword, handleNewPassword, newMessage, setNew, setNewMessage ] = useInput("newPassword");
    const [ newPasswordCheck, handleNewPasswordCheck, newCheckMessage, setNewCheck, setNewCheckMessage ] = useInput("newPasswordCheck");

    const editPasswordMutation = useMutation({
        mutationKey: "editPasswordMutation",
        mutationFn: editPasswordRequest,
        onSuccess: response => {
            console.log(response);
            alert("비밀번호를 성공적으로 변경하였습니다\n다시 로그인 바랍니다");
            localStorage.removeItem("AccessToken");
            window.location.replace("/userlogin");
        },
        onError: error => {
            if(error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                setOldMessage(null);
                setNewMessage(null);
                setNewCheckMessage(null);
                for(let [ k, v ] of errorEntries) {
                    const message = {
                        type: "error",
                        text: v
                    }

                    if(k === "oldPassword") {
                        setOldMessage(() => message);
                    }
                    if(k === "newPassword") {
                        setNewMessage(() => message);
                    }
                    if(k === "newPasswordCheck") {
                        setNewCheckMessage(() => message);
                    }
                }
            }
        }
    });

    const handleEditSubmitClick = () => {
        editPasswordMutation.mutate({
            oldPassword,
            newPassword,
            newPasswordCheck
        })
    }

    return (
        <div css={s.center}>
            <h1>비밀번호 변경</h1>

            <div css={s.ment}>
                <p>다른 아이디/사이트에서 사용한 적 없는 비밀번호</p>
                <p>이전에 사용한 적 없는 비밀번호가 안전합니다</p>
            </div>
            
            <AuthPageInput2 type={"password"} value={oldPassword} onChange={handleOldPassword} placeholder={"현재 비밀번호"} message={oldMessage} /><br></br>
            <AuthPageInput2 type={"password"} value={newPassword} onChange={handleNewPassword} placeholder={"새 비밀번호"} message={newMessage}/>
            <AuthPageInput2 type={"password"} value={newPasswordCheck} onChange={handleNewPasswordCheck} placeholder={"새 비밀번호 확인"} message={newCheckMessage}/><br></br>
            
            <div css={s.buttons}>
                <button css={s.submitBtn} onClick={handleEditSubmitClick}>확인</button>
                <button css={s.cancelBtn}>
                    <Link to={'/mypage'} style={{textDecoration: "none"}}>취소</Link>
                </button>
            </div>
        </div>
    );
}

export default UserInfoModification;