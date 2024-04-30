/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style"

function MypageMain(data) {
    const [ historyCount, setHistoryCount ] = useState({});

    console.log(data);
    return (
        <div css={s.layout}>
            <h1>나의 활동</h1>
            <div css={s.activitys}>
                <div css={s.activity}>
                    <div css={s.act}>
                        <div css={s.title}>
                            <h2>대출</h2>
                        </div>
                        <div css={s.info}>

                        </div>
                    </div>
                    <div css={s.act}>
                        <div css={s.title}>
                            <h2>반납</h2>
                        </div>
                        <div css={s.info}>

                        </div>
                    </div>
                    <div css={s.act}>
                        <div css={s.title}>
                            <h2>연체</h2>
                        </div>
                        <div css={s.info}>

                        </div>
                    </div>
                </div>
            </div>
            <div css={s.activitys2}>
                <div css={s.activity2}>

                </div>
                <div css={s.activity2}>

                </div>
            </div>
        </div>
    );
}

export default MypageMain;