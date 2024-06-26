/** @jsxImportSource @emotion/react */
import * as s from "./style";

import Select from "react-select";
import ReactQuill from 'react-quill';
import { useMutation } from "react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuillInput } from "../../hooks/quillHook";
import { useMaxSizeValidateInput } from "../../hooks/inputHook";
import { QUILL_MODULES } from "../../constants/quillModules";
import { registerNoticeRequest } from "../../apis/api/notice";

function NoticeBoardWritePage(props) {

    const [ postLabels, setPostLabels ] = useState(null);
    const [ inputValue, handleInputChange ] = useMaxSizeValidateInput(45);
    const [ quillValue, handleQuillValueChange ] = useQuillInput();

    const labelsOptions = [
        { value: 1, label: "공지사항"},
        { value: 2, label: "이벤트"}
    ]

    const titleChange = (selectedOption) => {
        setPostLabels(selectedOption);
    }


    const registerNoticeMustation = useMutation({
        mutationKey: "registerNoticeMustation",
        mutationFn: registerNoticeRequest,
        onSuccess: response => {
            alert("작성완료")
            window.location.replace("/boardList?page=1&option=0&text=");
        },
        onError: error => {
            alert(error.response.data);
        }
    })

    const handleNoticeSubmit = () => {
        // 제목이 없는 경우
        if (!inputValue) {
            alert("제목을 입력해주세요.");
            return; // 함수 종료
        }
        // 말머리가 선택되지 않은 경우
        else if(!postLabels) {
            alert("말머리를 선택해주세요.");
            return; // 함수 종료
        }
        // 내용이 없는 경우
        else if(!quillValue) {
            alert("내용을 입력해주세요.");
            return; // 함수 종료
        }
    
        // 모든 필수 입력 값이 존재하는 경우에만 작성 요청 보내기
        const postData = {
            title: inputValue,
            noticeBoardCategoryId: postLabels.value,
            content: quillValue
        };
        console.log(postData);
        registerNoticeMustation.mutate(postData);
    };
    

    return (
        <div css={s.layout}>
            <h1 css={s.headerTitle}>글 작성하기</h1>
            <div>
                <Select 
                    css={postLabels}
                    name={"postLabels"}
                    placeholder="말머리"
                    onChange={titleChange}
                    options={labelsOptions}
                    value={postLabels}
                />
                <input 
                    css= {s.boardTitle} 
                    name={"title"}
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
                value={quillValue}
            />
            <button css={s.submitButton} onClick={handleNoticeSubmit}>작성하기</button>
            <Link to={"/boardList?page=1&option=0&text="}>
                <button>목록</button>
            </Link>
        </div>
    );
}

export default NoticeBoardWritePage;