import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 100%;
    background-color: gray;
`;

export const bookContainer = css`
    display: flex;
    border: 1px solid #dbdbdb;
    flex-direction: row;
    align-items: center;
    padding: 0px 10px;
    margin: 10px 0px;
    width: 95%;
    height: 400px;
    background-color: white;
`;
export const bookInfo = css`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin-right: 20px;
    width: 150px;
    height: 300px;
`;

export const toBookInfo = css`

`;