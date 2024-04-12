import { useMutation } from "react-query";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useInput } from "../../hooks/userInput"
import { editPasswordRequest } from "../../apis/api/editPassword";

function PasswordEditPage() {
    useAuthCheck();
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
            window.location.replace("/signin");
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
        <div>
            <h1>비밀번호 변경</h1>
            <AuthPageInput type={"password"} value={oldPassword} onChange={handleOldPassword} placeholder={"현재 비밀번호 입력"} message={oldMessage} />
            <AuthPageInput type={"password"} value={newPassword} onChange={handleNewPassword} placeholder={"새 비밀번호 입력"} message={newMessage}/>
            <AuthPageInput type={"password"} value={newPasswordCheck} onChange={handleNewPasswordCheck} placeholder={"새 비밀번호 확인"} message={newCheckMessage}/>
            <button onClick={handleEditSubmitClick}>비밀번호 변경하기</button>
        </div>
    );
}

export default PasswordEditPage;