/** @jsxImportSource @emotion/react */
import * as s from "./style"; 
import { CiSquareCheck, CiSquareInfo } from "react-icons/ci";

function AuthPageInput({ type, name, placeholder, value, onChange, message }) {
    return (
        <div css={s.inputBox1}>
            <input css={!(placeholder === '나이' || '생년월일') ? s.input1 : s.input2}
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}/>
            {
                message ?
                <div css={s.abc}>
                    <div css={s.inputIcon(message.type)}>
                            {message.type === "error" ? <CiSquareInfo /> : <CiSquareCheck />}
                    </div>
                    <div css={s.messageBox(message.type)}>
                        {message.text}
                    </div>
                </div> :
                <div css={s.blank}></div>
            }
        </div>
    );
}

export default AuthPageInput;
