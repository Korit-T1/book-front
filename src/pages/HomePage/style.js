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

export const box = css`
    border: 1px solid #dbdbdb;
    width: 500px;
    height: 500px;
    background-color: green;
`;