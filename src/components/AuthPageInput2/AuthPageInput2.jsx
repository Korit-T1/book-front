/** @jsxImportSource @emotion/react */
import * as s from "./style"; 

function AuthPageInput2({ type, name, placeholder, value, onChange, message }) {
    return (
        <div css={s.inputBox1}>
            <input css={s.input}
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}/>
        </div>
    );
}

export default AuthPageInput2;