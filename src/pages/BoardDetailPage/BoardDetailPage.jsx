import { useState } from "react";
import * as s from "./style";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom"; 
import { deleteNotice, getNotice } from "../../apis/api/notice";

function BoardDetailPage(props) {
    const { noticeBoardId } = useParams();
    const [notice, setNotice] = useState(null);

    const noticeQuery = useQuery(
        ["noticeQuery", noticeBoardId],
        () => getNotice(noticeBoardId),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                setNotice(response?.data);
            },
            onError: error => {
                console.log("error");
            }
        }
    );

    const handleDelete = async () => {
        if (window.confirm("정말로 이 게시글을 삭제하시겠습니까?")) {
            try {
                await deleteNotice([noticeBoardId]);
                alert("해당 게시글 삭제 완료");
                window.location.replace("/boardList?page=1&option=0&text=");
            } catch (error) {
                console.error("게시글 삭제에 실패했습니다:", error);
                alert("게시글 삭제에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };

    const handleUpdate = () => {
        // 수정하기 페이지로 이동
        window.location.replace(`/boardDetail/edit/${noticeBoardId}`);
    };
    // HTML 태그를 제거하여 순수한 텍스트만 반환하는 함수
    const removeHTMLTags = (str) => {
        return str.replace(/<[^>]*>?/gm, '');
    }

    // 날짜를 원하는 형식으로 변환하는 함수
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    return (
        <>
            <div>
                {notice && (
                    <div css={s.detailContainer}>
                        <h3>{notice.noticeBoardCategoryName}</h3>
                        <h2 css={s.title}>제목: {notice.title}</h2>
                        <div css={s.content}>
                            {/* HTML 태그를 제거한 순수한 텍스트를 표시 */}
                            {removeHTMLTags(notice.content)}
                        </div>
                        <p css={s.date}>게시일: {formatDate(notice.createDate)}</p>
                    </div>
                )}
            </div>
            <div>
            
                <button onClick={handleUpdate}>수정</button>
                <button onClick={handleDelete}>삭제</button>
            </div>
        </>
    );
}

export default BoardDetailPage;




