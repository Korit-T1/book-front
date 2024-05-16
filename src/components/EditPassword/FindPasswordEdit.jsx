import { useMutation } from 'react-query';
import { editPasswordRequest } from '../../apis/api/editPassword';
import { useInput } from '../../hooks/userInput';
import AuthPageInput from '../AuthPageInput/AuthPageInput';
import { useEffect, useState } from 'react';

function EditPassword({ userId }) {
    // const [ newPassword, handleNewPassword, newMessage, setNew, setNewMessage ] = useInput("newPassword");
    // const [ newPasswordCheck, handleNewPasswordCheck, newCheckMessage, setNewCheck, setNewCheckMessage ] = useInput("newPasswordCheck");

    const [ newPassword, newPasswordChange, newPasswordMessage ] = useInput("password");
    const [ newCheckPassword, newCheckPasswordChange ] = useInput("checkPassowrd");
    const [ newCheckPasswordMessage, setNewCheckPasswordMessage ] = useState(null);

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
                for(let [ k, v ] of errorEntries) {
                    const message = {
                        type: "error",
                        text: v
                    }
                }
            }
        }
    });

    useEffect(()=> { // 비밀번호 일치하는지 확인
        if(!newCheckPassword || !newPassword) { // 비밀번호가 빈칸일때 비밀번호 확인란 반응x 
            setNewCheckPasswordMessage(() => null)
            return;
        }

        if(newCheckPassword === newPassword) {
            setNewCheckPasswordMessage(() => {
                return {
                    type: "success",
                    text: ""
                }
            })
        }else {
            setNewCheckPasswordMessage(() => {
                return {
                    type: "error",
                    text: "비밀번호가 일치하지 않습니다."
                }
            })
        }
    }, [newCheckPassword, newPassword]);


    const handleSignupSubmit = () => {
        const checkFlags = [
            newPasswordMessage?.type,
            newCheckPasswordMessage?.type
        ];

        if(checkFlags.includes("error") || checkFlags.includes(null) || checkFlags.includes(undefined)) {
            alert("비밀번호가 일치 하지 않습니다.");
            return;
        }

        changePasswordMutation.mutate({ 
            userId, 
            newPassword,
            newCheckPassword
        });
    };

    return (
        <>
            <div>
                {/* 비밀번호 변경 폼 */}
                <AuthPageInput 
                    type={"password"}
                    name={"password"}
                    placeholder={"새 비밀번호"}
                    value={newPassword}
                    onChange={newPasswordChange}
                    message={newPasswordMessage}
                />
                <AuthPageInput 
                    type={"password"}
                    name={"chekcPassword"}
                    placeholder={"새 비밀번호 확인"}
                    value={newCheckPassword}
                    onChange={newCheckPasswordChange}
                    message={newCheckPasswordMessage}
                />
            </div>
            <button onClick={handleSignupSubmit}>비밀번호 변경하기</button>
        </>      
    );
}

export default EditPassword;