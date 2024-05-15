/** @jsxImportSource @emotion/react */
import * as s from "./style";

import Select from "react-select";
import { useState, useEffect } from "react"; 
import { Link, useParams } from "react-router-dom"; 
import { getNotice, updateNotice } from "../../apis/api/notice"; 
import ReactQuill from "react-quill";
import { QUILL_MODULES } from "../../constants/quillModules";
import { useMaxSizeValidateInput } from "../../hooks/inputHook";
import { useQuillInput } from "../../hooks/quillHook";
import { useQuery } from "react-query";

function BoardModifyPage(props) {
    const { noticeBoardId } = useParams();
    const [ postLabels, setPostLabels ] = useState(null);
    const [ titleValue, setTitleValue ] = useState("");
    const [ quillValue, setQuillValue ] = useState("");

    // 기존 게시글 내용을 불러와 상태로 관리
    const [originalNotice, setOriginalNotice] = useState(null);

    const labelsOptions = [
        { value: 1, label: "공지사항" },
        { value: 2, label: "이벤트" }
    ];

    const noticeQuery = useQuery(["noticeQuery"],
        async () => await getNotice(noticeBoardId),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                console.log(response)
                setOriginalNotice(response.data);
                setTitleValue(response.data.title);
                setPostLabels(labelsOptions.filter(option => option.value === response.data.noticeBoardCategoryId)[0]);
                setQuillValue(response.data.content);
            }
        }
    )

    const titleChange = (selectedOption) => {
        setPostLabels(selectedOption);
    };

    const handleNoticeSubmit = async () => {
       
        if (!postLabels) {
            alert("말머리를 선택해주세요.");
            return;
        } else if(!titleValue) {
            alert("제목을 입력해주세요.");
            return; 
        } else if(quillValue === "<p><br></p>") {
            alert("내용을 입력해주세요.");
            return; 
        }

        // 수정된 게시글 내용을 담은 데이터 생성
        const updatedData = {
            ...originalNotice, // 기존의 내용을 그대로 가져오고
            title: titleValue, // 변경된 제목
            noticeBoardCategoryId: postLabels?.value, // 변경된 말머리
            content: quillValue // 변경된 내용
        };

        try {
            // 수정 요청 보내기
            await updateNotice(updatedData);
            alert("게시글 수정 완료");
            window.location.replace(`/boardDetail/${noticeBoardId}`);
        } catch (error) {
            console.error("게시글 수정에 실패했습니다:", error);
            alert("게시글 수정에 실패했습니다. 다시 시도해주세요.");
        }        
    };

    return (
        <div css={s.layout}>
            <h1 css={s.headerTitle}>글 수정하기</h1>
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
                    css={s.boardTitle} 
                    name={"title"}
                    placeholder="제목을 입력하세요."
                    onChange={(e) => setTitleValue(() => e.target.value)} // 입력값 변경 시 상태 업데이트
                    value={titleValue} 
                />
            </div>
            <ReactQuill 
                style={{
                    width: "90%",
                    height: "400px"
                }} 
                modules={QUILL_MODULES}
                onChange={(value) => setQuillValue(value)} // Quill 에디터의 내용 변경 시 상태 업데이트
                value={quillValue} 
            />
            <button css={s.submitButton} onClick={handleNoticeSubmit}>수정하기</button>
            <Link to={"/boardList?page=1&option=0&text="}>
                <button>목록</button>
            </Link>
        </div>
    );
}

export default BoardModifyPage;
