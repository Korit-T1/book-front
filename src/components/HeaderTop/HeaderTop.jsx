/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./style";

function HeaderTop(props) {
    const navigate = useNavigate();
    const goToSingin = () => {
        navigate("/auth/signin");
    }
    const goToSignup = () => {
        navigate("/auth/signup");
    }

    return (
        <div css={s.headerTop}>
            <button css={s.button} onClick={goToSingin}>로그인</button>
            <button css={s.button} onClick={goToSignup}>회원가입</button>
        </div>
    );
}

export default HeaderTop;