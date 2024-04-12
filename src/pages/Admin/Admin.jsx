/** @jsxImportSource @emotion/react */
import * as s from "./style"

function Admin() {
    return (
        <>
            <div css={s.layout}>
                <div css={s.leftSide}>
                    <div css={s.profile}>
                        <h1>PROFILE</h1>
                    </div>
                    <div css={s.menu}>
                        <h1>MENU</h1>
                    </div>
                </div>
                <div css={s.rightSide}>
                    <div css={s.rightBody}>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin;