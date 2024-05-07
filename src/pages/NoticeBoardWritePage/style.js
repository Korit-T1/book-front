import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 180px;
    border: 1px solid #dbdbdb;
    padding: 50px 50px;

`;

export const headerTitle = css`
    margin-bottom: 30px;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
`;

export const postLabels = css`

`;

export const boardTitle = css`
    box-sizing: border-box;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #ccc;
    padding: 10px;
    width: 90%;
`;

export const submitButton = css`
    box-sizing: border-box;
    margin-top: 50px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 90%;
    background-color: white;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eee;
    }

`;