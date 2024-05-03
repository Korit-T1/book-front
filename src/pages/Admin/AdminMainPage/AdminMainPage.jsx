/** @jsxImportSource @emotion/react */
import * as s from "./style"

function AdminMainPage({children}) {
    console.log("aaa")
    return (
        <>
           <div css={s.background}>
                <div css={s.layout}>
                    <div css={s.visitantBox}>
                        방문자수
                    </div>
                </div>
           </div>
        </>
    );
}

export default AdminMainPage;