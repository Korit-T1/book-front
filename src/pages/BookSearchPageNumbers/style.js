import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 20px;
    width: 100%;
    /* box-sizing: border-box;
    border: 1px solid; */
`;

export const pageNumbers = css`
    /* box-sizing: border-box;
    border: 1px solid; */
    display: flex;
    margin-bottom: 10px;
    /* justify-content: space-evenly; */
`;

export const pageButton = (isSelected) => css`
    box-sizing: border-box;
    border-radius: 20px; // 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${isSelected ? "none" : "2px solid #dbdbdb"}; 
    border-radius: 8px;  // 2px;
    margin: 3px;
    min-width: 35px;
    height: 35px;
    background-color: ${isSelected ? "rebeccapurple" : "white"};
    text-decoration: none;
    font-size: 20px;
    color: ${isSelected ? "white" : "#777777"};
    
    :hover {
        background-color: #e0e0e0;;
    }
`;

export const pageCount = css`
    /* box-sizing: border-box; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #dbdbdb; */
    padding-top: 10px;
    height: 25px;
    background-color: white;
    color: #777777;
    //margin-right: 20px;
    cursor: default;
    width: 300px;
    display: flex;
    font-size: 18px;
`;

export const page = css`
    width: 50%;
`;

export const count = css`
    width: 50%;
`;

