import { css } from "@emotion/react";

export const inputBox1 = css`
    flex-direction: row;
    border-radius: 3px;
    width: 300px;
    height: 55px;
    margin-top: 15px;
    margin-bottom: 22px;
    border: 1px solid transparent;

    &:hover {
        border-color: blue;
        transition: background-color 0.7s;
        margin-top: 5px;
    }
`;

export const input = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 10px 30px 10px 10px;
    background-color: white;
    border-radius: 3px;
    width: 100%;
    height: 100%;
    font-size: 12px;
    cursor: pointer;
`;

export const input2 = css`
    box-sizing: border-box;
    outline: none;
    border-top: none;
    border-bottom: 1px solid #dbdbdb;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    padding: 10px 30px 10px 10px;
    background-color: white;
    border-radius: 3px;
    width: 100%;
    height: 100%;
    font-size: 12px;

    cursor: pointer;
`;

export const inputIcon = (type) => css`
    position: absolute;
    top: 10px;
    right: 10px;

    color: ${type === 'error' ? "#ff6161" : "#00921b"};
`;
    
export const messageBox = (type) => css`
    padding: ${type === "error" ? "5px 10px" : 0};
    width: 100%;
    color: ${type === 'error' ? "#ff6161" : "#00921b"};
    font-size: 11px;
    font-weight: 600;
`;
