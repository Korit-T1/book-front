import { css } from "@emotion/react";

export const layout = css`
    display: flex;

    background-color: white;
    height: 100%;
    width: 100%;
`;

export const leftSide = css`
    background-color: #5056f7;
    width: 20%;
    height: 100vh;

    border-right: 1px solid;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
`;

export const profile = css`
    margin: 5px;
    width: 95%;
    height: 35%;
    border: 1px solid;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const menu = css`
    margin: 5px;
    width: 95%;
    height: 60%;
    border: 1px solid;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const rightSide = css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    background-color: #dbdbdb;
`;

export const rightBody = css`
    width: 1100px;
    height: 700px;
    background-color: white;
`;