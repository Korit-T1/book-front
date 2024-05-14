import { useMutation } from 'react-query';
import { editPasswordRequest } from '../../apis/api/editPassword';
import { useInput } from '../../hooks/userInput';
import AuthPageInput from '../AuthPageInput/AuthPageInput';

function EditPassword({ userInfo }) {
    const [ newPassword, handleNewPassword, newMessage, setNew, setNewMessage ] = useInput("newPassword");
    const [ newPasswordCheck, handleNewPasswordCheck, newCheckMessage, setNewCheck, setNewCheckMessage ] = useInput("newPasswordCheck");

    const changePasswordMutation = useMutation({
        mutationKey: "changePasswordMutation",
        mutationFn: editPasswordRequest,
        onSuccess: response => {
            console.log(response);
            alert("비밀번호를 성공적으로 변경하였습니다\n다시 로그인 바랍니다");
            window.location.replace("/userlogin");
        },
        onError: error => {
            if(error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                setNewMessage(null);
                setNewCheckMessage(null);
                for(let [ k, v ] of errorEntries) {
                    const message = {
                        type: "error",
                        text: v
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

    const handlePasswordChange = () => {
        changePasswordMutation.mutate({ 
            userId: userInfo.userId, 
            newPassword, 
            newPasswordCheck 
        });
    };

    return (
        <div>
            {/* 비밀번호 변경 폼 */}
            <AuthPageInput type={"password"} value={newPassword} onChange={handleNewPassword} placeholder={"새 비밀번호 입력"} message={newMessage}/>
            <AuthPageInput type={"password"} value={newPasswordCheck} onChange={handleNewPasswordCheck} placeholder={"새 비밀번호 확인"} message={newCheckMessage}/>
            <button onClick={handlePasswordChange}>비밀번호 변경하기</button>
        </div>
    );
}

export default EditPassword;