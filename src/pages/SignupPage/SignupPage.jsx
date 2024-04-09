/** @jsxImportSource @emotion/react */
import * as s from "./style";

import Select from "react-select";
import { useEffect, useState } from "react";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useInput } from "../../hooks/userInput";
import { useNavigate } from "react-router-dom";
import { LOCATION } from "../../constants/localDistrict";
import { signupRequest } from "../../apis/api/signup";

function SignupPage() {
    const navigate = useNavigate();
    const [ username, userNameChange, usernameMessage, setsetUsernameValue, setUsernameMessage  ] = useInput("username");
    const [ password, passwordChange, passwordMessage ] = useInput("password");
    const [ checkPassword, checkPasswordChange ] = useInput("checkPassowrd");
    const [ name, nameChange, nameMessage ] = useInput("name");
    const [ email, emailChange, emailMessage ] = useInput("email");
    const [ phone, phoneChange, phoneMessage ] = useInput("phone");
    const [ address, setAddress, addressMessage ] = useState("");
    const [ gender, setGender, genderMessage] = useState("");
    const [ age, ageChange, ageMessage ] = useInput("age");
    const [ birth, birthChange, birthMessage ] = useInput("birth");
    const [ checkPasswordMessage, setCheckPasswordMessage ] = useState(null);

    const addressOptions = (LOCATION)
    
    const genderOptions = [
        { value: '남', label: '남' },
        { value: '여', label: '여' }
    ];

    useEffect(()=> { // 비밀번호 일치하는지 확인
        if(!checkPassword || !password) { // 비밀번호가 빈칸일때 비밀번호 확인란 반응x 
            setCheckPasswordMessage(() => null)
            return;
        }

        if(checkPassword === password) {
            setCheckPasswordMessage(() => {
                return {
                    type: "success",
                    text: ""
                }
            })
        }else {
            setCheckPasswordMessage(() => {
                return {
                    type: "error",
                    text: "비밀번호가 일치하지 않습니다."
                }
            })
        }
    }, [checkPassword, password]);

    const handleSignupSubmit = () => {
        const checkFlags = [
            usernameMessage?.type,
            passwordMessage?.type,
            checkPasswordMessage?.type,
            nameMessage?.type,
            emailMessage?.type,
            phoneMessage?.type,
            // addressMessage?.type,
            // genderMessage?.type,
            ageMessage?.type,
            birthMessage?.type
        ];
        console.log(checkFlags)
        if(checkFlags.includes("error") || checkFlags.includes(null) || checkFlags.includes(undefined)) {
            alert("가입 정보를 다시 확인해주세요.");
            return;
        }

        signupRequest({
            username,
            password,
            name,
            email,
            phone,
            address,
            gender,
            age,
            birth
        }).then(response => {
            console.log(response);
            if(response.status === 201) {
                navigate("/auth/signin");
            }
        }).catch(error => {
            if(error.response.status === 400) {
                const errorMap = error.response.date;
                const errorEntries = Object.entries(errorMap);
                for(let [k, v] of errorEntries) {
                    if(k === "username") {
                        setUsernameMessage(() => {
                            return {
                                type: "error",
                                test: v
                            }
                        })
                    }
                }
            }else {
                alert("회원가입 오류");
            }
        });
    }

    return (
        <div>
            <div>
                <h1>BookDrop</h1>
            </div>
            <AuthPageInput 
                type={"text"}
                name={"username"}
                placeholder={"아이디"}
                value={username}
                onChange={userNameChange}
                message={usernameMessage}
            />
            <AuthPageInput 
                type={"password"}
                name={"password"}
                placeholder={"비밀번호"}
                value={password}
                onChange={passwordChange}
                message={passwordMessage}
            />
            <AuthPageInput 
                type={"password"}
                name={"checkPassowrd"}
                placeholder={"비밀번호 확인"}
                value={checkPassword}
                onChange={checkPasswordChange}
                message={checkPasswordMessage}
            />
            <AuthPageInput 
                type={"text"}
                name={"name"}
                placeholder={"이름"}
                value={name}
                onChange={nameChange}
                message={nameMessage}
            />
            <AuthPageInput 
                type={"text"}
                name={"email"}
                placeholder={"이메일"}
                value={email}
                onChange={emailChange}
                message={emailMessage}
            />
            <AuthPageInput 
                type={"text"}
                name={"phone"}
                placeholder={"휴대전화번호"}
                value={phone}
                onChange={phoneChange}
                message={phoneMessage}
            />
            <Select
                options={addressOptions}
                placeholder="주소를 선택하세요"
                onChange={(selectedOption) => setAddress(selectedOption.value)}
            />
            <Select
                options={genderOptions}
                placeholder="성별을 선택하세요"
                onChange={(selectedOption) => setGender(selectedOption.value)}
            />
            <AuthPageInput 
                type={"text"}
                name={"age"}
                placeholder={"나이"}
                value={age}
                onChange={ageChange}
                message={ageMessage}
            />
            <AuthPageInput 
                type={"text"}
                name={"birth"}
                placeholder={"생년월일"}
                value={birth}
                onChange={birthChange}
                message={birthMessage}
            />
            <div>
                <button onClick={handleSignupSubmit}>가입하기</button>
            </div>
        </div>
    );
}

export default SignupPage;