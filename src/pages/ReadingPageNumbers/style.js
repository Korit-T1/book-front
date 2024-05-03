import { css } from "@emotion/react";

export const maxPageNumber = css`

`;

export const count = css`

`;

export const book = css`

`;

export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const pageCount = css`
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: white;
    color: #777777;
    cursor: default;
`;

export const pageNumbers = css`
    display: flex;
`;

export const pageButton = (isSelected) => css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3px;
    border: ${isSelected ? "none" : "1px solid #dbdbdb"};
    /* border-radius: 2px; */
    min-width: 30px;
    height: 30px;
    background-color: ${isSelected ? "#dbdbdb" : "white"};
    text-decoration: none;
    font-size: 14px;
    color: ${isSelected ? "white" : "#777777"};   
`;


export const page = css`
    margin-left: 10px;
    margin-right: 10px;
    font-size: 14px;
`;

export const total = css`
    font-size: 14px;
`;