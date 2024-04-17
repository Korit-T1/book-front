import { css } from "@emotion/react";

export const background = css`
    background-color: #5056f7;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
`;

export const layout = css`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    
    flex-direction: column;

    width: 400px;
    height: 300px;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    background-color: white;
`;