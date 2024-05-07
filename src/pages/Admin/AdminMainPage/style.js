import { css } from "@emotion/react";

export const background = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -99;
    height: 100%;
    width: 100%;
    background-color: #cccccc;
`;
export const layout = css`
    box-sizing: border-box;
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #fafafa;
    padding: 10px;
    width: 1200px;
    height: 100%;
    overflow: hidden;
`;
export const box = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: auto;
    height: auto;
`
export const header = css`

`
export const visitantBox = css`
    border: 1px solid #dbdbdb;
    width: 550px;
    height: 400px;
    background-color: white;
    margin-right: 15px;
    margin-bottom: 15px;
`;
export const membership = css`
    border: 1px solid #dbdbdb;
    width: 550px;
    height: 400px;
    background-color: white;
`
export const loanBox = css`
    border: 1px solid #dbdbdb;
    width: 95%;
    height: 400px;
    background-color: white;
`