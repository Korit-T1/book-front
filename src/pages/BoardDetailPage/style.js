import { css } from "@emotion/react";

export const detailContainer = css`
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const title = css`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc; /* 제목 아래에 border 선 추가 */
    padding-bottom: 10px; /* 제목 아래에 여백 추가 */
`;

export const content = css`
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc; /* 내용 아래에 border 선 추가 */
    padding-bottom: 20px; /* 내용 아래에 여백 추가 */
`;

export const date = css`
    font-size: 14px;
    color: #666;
`;

