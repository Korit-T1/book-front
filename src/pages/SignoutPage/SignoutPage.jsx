/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style"

function SignoutPage(data) {
    const [ isChecked, setIsChecked ] = useState(false);

    const onCheckedBox = (checked) => {
        setIsChecked(checked);
    };

    const resignButton = (isChecked) => {
        isChecked ? window.alert("탈퇴 완료") : window.alert("동의 필요")
    }

    const cancelButton = () => {
        window.location.replace("/mypage")
    }

    return (
        <div css={s.center}>
            <div css={s.top}>
                <div>
                    <h1>회원 탈퇴를 신청하기 전, 다음 내용을 꼭 확인해주세요.</h1>
                </div>
                <div>
                    <h3>ㆍ 회원 정보 및 개인형 서비스 이용 기록은 개인 정보보호 처리 방침 기준에 따라 삭제됩니다.</h3>
                    <h3>ㆍ 회원 탈퇴 시 대출 중인 도서는 짧은 시일 이내에 자동 반납처리 됩니다.</h3>
                    <h3>ㆍ 회원 탈퇴 시 더 이상 BookDrop 서비스 사용이 불가능하며, BookDrop 공식 사이트에서도 탈퇴 처리됩니다.</h3>
                    <h3>ㆍ 회원 탈퇴 후 30일간 이전과 동일한 개인정보를 통한 재가입이 불가능한 점 유의바랍니다. </h3>
                    <h3>ㆍ 탈퇴와 재가입을 통해 아이디를 교체하면서 선량한 이용자분들께 피해를 끼치는 행위를 방지하기 위한 조치오니 넓은 양해 부탁드립니다. </h3>
                    <h4>※ 소셜계정을 연동하여 가입한 회원의 경우, 탈퇴 시 소셜계정도 자동으로 연동해지 됩니다.</h4>
                    <h3>ㆍ 회원 탈퇴 시 즉시 탈퇴 처리 되어 별도로 복구 되지 않는 점 참고바랍니다. </h3>
                </div>
                <div css={s.checkContainer}>
                    <input type="checkbox" id="check" css={s.checkBox}
                        onChange={e => onCheckedBox(e.target.checked)}/>
                    <label htmlFor="check"></label>
                    <p>안내사항을 모두 확인하였으며, 이에 동의합니다.</p>
                </div>
            </div>
            <div css={s.bot}>
                <div css={s.buttons}>
                    <button css={s.btn1} onClick={() => resignButton(isChecked)}>회원 탈퇴</button>
                    <button css={s.btn2} onClick={() => cancelButton()}>취소</button>
                </div>
            </div>
        </div>
    );
}

export default SignoutPage;