import { css } from "@emotion/react";

export const statusBox = css`
    height: 100px;
    display: flex;
    width: 99%;
    border-bottom: 1px solid black;
    margin: 0 auto;
`;

export const status = css`
    display: flex;
    flex: 1;
    background-color: aqua;
    border-radius: 20px;
    border: 1px solid #dbdbdb;
    background-color: white;
    justify-content: space-evenly;
`;

export const statusInfo = css`
    box-sizing: border-box;
    margin: 5px;
    border: 1px solid black;
    width: 17%;
    background-color: #7d6e6e;
`;

export const loanTable = css`
    margin: 10px auto;
    border-collapse: collapse;
    border: 1px solid black;

    font-size: 14px;

    th, td {
        border: 1px solid black;
        padding: 10px; 
    }

    th {
        background-color: #bab3b3;
        text-align: left;
    }
`;

