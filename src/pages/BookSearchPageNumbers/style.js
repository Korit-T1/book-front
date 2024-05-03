import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    width: 100%;
`;

export const pageNumbers = css`
    display: flex;
`;

export const pageButton = (isSelected) => css`
    box-sizing: border-box;
    border-radius: 20px; // 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${isSelected ? "none" : "1px solid #dbdbdb"}; 
    border-radius: 8px;  // 2px;
    margin-bottom: 13px;
    min-width: 35px;
    height: 35px;
    background-color: ${isSelected ? "#100d0d" : "white"};
    text-decoration: none;
    font-size: 20px;
    color: ${isSelected ? "white" : "#777777"};
`;

export const pageCount = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    padding: 10px;
    height: 25px;
    background-color: white;
    color: #777777;
    //margin-right: 20px;
    cursor: default;

`;

export const page = css`

`;

export const count = css`
    font-size: 14px;

`;

