/** @jsxImportSource @emotion/react */
import * as s from "./style";

import Select from "react-select";
import ReactQuill from 'react-quill';
import { useQuillInput } from "../../../hooks/quillHook";
import { useMaxSizeValidateInput } from "../../../hooks/inputHook";
import { QUILL_MODULES } from "../../../constants/quillModules";
import { useMutation } from "react-query";
import { useState } from "react";



function NoticeBoardWritePage(props) {

    const [ inputValue, handleInputChange ] = useMaxSizeValidateInput(45);
    const [ quillValue, handleQuillValueChange ] = useQuillInput();
    const [ postLabels, setPostLabels ] = useState("");

    const labelsOptions = [
        { value: 1, label: "공지사항"},
        { vlaue: 2, label: "이벤트"}
    ]

    const registerNoticeMustation = useMutation({
        mutationKey: "registerNoticeMustation",
        mutationFn: "registerNoticeRequest",
        onSuccess: response => {
            alert("작성완료")
            window.location.replace("/boardList");
        },
        onError: error => {
            alert(error.response.data);
        }
    })

    const handleNoticeSubmit = () => {
        registerNoticeMustation.mutate({
            inputValue,
            quillValue
        })
    }

    return (
        <div css={s.layout}>
            <h1 css={s.headerTitle}>글 작성하기</h1>
            <div>
                <Select 
                    css={postLabels}
                    name={"postLabels"}
                    placeholder="말머리"
                    options={labelsOptions}
                />
                <input 
                    css= {s.boardTitle} 
                    type="text" 
                    placeholder="제목을 입력하세요."
                    onChange={handleInputChange} 
                    value={inputValue} 
                />
            </div>
            <ReactQuill 
                style={{
                width: "90%",
                height: "400px"
                }} 
                modules={QUILL_MODULES}
                onChange={handleQuillValueChange}
            />
            <button css={s.submitButton} onClick={handleNoticeSubmit}>작성하기</button>
        </div>
    );
}

export default NoticeBoardWritePage;