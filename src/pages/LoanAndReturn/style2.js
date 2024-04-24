import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 95%;
    height: 95%;
    /* border: 1px solid black; */
`;

export const data = css`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 50%;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    
    
`;

export const bookData = css`
    display: flex;
    margin-left: 15px;
    border: 1px solid black;
    width: 70%;
    height: 90%;
`;

export const bookImage = css`
    width: 180px;
    height: 100%;
    background-color: #8b8585;
`;

export const bookInfo = css`
    flex: 1;
    background-color: bisque;
`

export const buttons = css`
    /* border: 1px solid black; */
    flex-grow: 1;
    height: 90%;
`;