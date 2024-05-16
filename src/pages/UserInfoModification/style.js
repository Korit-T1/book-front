import { css } from "@emotion/react";

export const center = css`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;

    width: 50%;
    height: 90%;
    border: 1px solid #dbdbdb;
    & > h1 {
        margin-top: 70px;
        margin-bottom: 40px;
    }
`;

export const ment = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    & > p {
        margin: 3px;
    }
`;

export const buttons = css`
    margin-top: 40px;
    display: flex;
    width: 300px;
    height: 100px;
    flex-direction: column;
    /* border: 1px solid; */
`;

export const submitBtn = css`
    box-sizing: border-box;
    background-color: rebeccapurple;
    border: 1px solid #dbdbdb;
    height: 46px;
    color: white;
    font-weight: bold;

    cursor: pointer;
`;

export const cancelBtn = css`
    margin-top: 8px;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    background-color: white;
    height: 46px;
    font-weight: bold;

    cursor: pointer;
`;