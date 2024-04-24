import { css } from "@emotion/react";

export const header = css`
    border: 1px solid black;
    width: 97%;
    height: 10%;
`;

export const container = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    width: 97%;
    height: 83%;
    border: 1px solid black;
`;

export const data = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 49%;
    height: 32.5%;
    border: 1px solid #dbdbdb;
    /* border-radius: 20px; */
`;

export const bookData = css`
    display: flex;
    width: 96%;
    height: 91.5%;
`;

export const bookImage = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 100%;
    overflow: hidden;
    border: 1px solid #dbdbdb;

    & > img {
        width: 95%;
        height: 96%;
    } 
`;

export const bookInfo = css`
    margin-left: 10px;
    /* background-color: gray; */
    flex: 1;
`

export const bookName = css`
    box-sizing: border-box;
    width: 100%;
    padding: 5px 0px 10px;
    /* overflow:hidden; */
    /* text-overflow:ellipsis; */
    /* white-space:nowrap; */
    font-size: 14px;
    font-weight: 600;
`

export const authorName = css`
    box-sizing: border-box;
    width: 100%;
    /* overflow:hidden; */
    /* text-overflow:ellipsis; */
    /* white-space:nowrap; */
    font-size: 12px;
    font-weight: 400;
    color: #a3a3a3;
`

export const publisherName = css`
    box-sizing: border-box;
    width: 100%;
    /* overflow:hidden; */
    /* text-overflow:ellipsis; */
    /* white-space:nowrap; */
    font-size: 12px;
    font-weight: 400;
    color: #a3a3a3;
    
`
export const page = css`
    /* box-sizing: border-box; */
    border: 1px solid black;
    width: 97%;
    height: 7%;
`;