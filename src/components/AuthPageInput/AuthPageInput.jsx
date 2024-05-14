/** @jsxImportSource @emotion/react */
import * as s from "./style"; 

import { CiSquareCheck, CiSquareInfo } from "react-icons/ci";

function AuthPageInput({ type, name, placeholder, value, onChange, message }) {
    return (
        
        <div css={s.inputBox1}>
            <input 
                css={placeholder === '새 비밀번호 확인' ? s.input2 : s.input}
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                
            />
            {
                !!message &&
                <div css={s.inputIcon(message.type)}>
                    {message.type === "error" ? <CiSquareInfo /> : <CiSquareCheck />}
                </div>
            }
            {
                !!message &&
                <div css={s.messageBox(message.type)}>
                    {message.text}
                </div>
            }
        </div>
        
    );
}

export default AuthPageInput;
