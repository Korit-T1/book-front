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

export const inputBox = css`
    display: flex;
    flex-direction: column;
`
export const userBox = css`
    overflow: auto;
`