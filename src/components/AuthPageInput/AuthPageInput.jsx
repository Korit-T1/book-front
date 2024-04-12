/** @jsxImportSource @emotion/react */
import * as s from "./style"; 

import { CiSquareCheck, CiSquareInfo } from "react-icons/ci";

function AuthPageInput({ type, name, placeholder, value, onChange, message }) {
    return (
        <div>
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange} 
            />
            {
                !!message &&
                <div>
                    {message.type === "error" ? <CiSquareInfo /> : <CiSquareCheck />}
                </div>
            }
            {
                !!message &&
                <div>
                    {message.text}
                </div>
            }
        </div>
    );
}

export default AuthPageInput;