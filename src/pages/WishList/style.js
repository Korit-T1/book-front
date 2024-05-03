import { css } from "@emotion/react";

export const header = css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 5%;
`;

export const filter = css`
    text-decoration: none;
`;

export const deleteBtn = css`
    text-decoration: none;
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;

    padding: 2px 4px 4px;
    width: 100%;
    height: 100%;

    /* border: 1px solid; */
`;

export const data = css`
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 4px;
    width: 49%;
    height: 32%;
    border: 1px solid #dbdbdb;
    /* border-radius: 20px; */
`;

export const bookData = css`
    display: flex;
    width: 100%;
    height: 90%;
    /* border: 1px solid; */
`;

export const checkBox = css`
    display: flex;
    justify-content: center;
    width: 10%;
    height: 10%;
`;

export const checkBtn = css`
    display: flex;
    justify-content: center;
    border: none;
    background-color: white;

    cursor: pointer;
`;

export const bookImage = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    overflow: hidden;
    border: 1px solid #dbdbdb;

    & > img {
        width: 95%;
        height: 96%;
    } 
`;

export const bookInfo = css`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    margin-left: 10px;
    /* background-color: gray; */
    width: 51.5%;
`

export const top = css`
    box-sizing: border-box;
    /* border: 1px solid; */
    height: 80%;
`;

export const bot = css`
    display: flex;
    box-sizing: border-box;
    /* border: 1px solid; */
    flex: 1;
`;

export const removeBox = css`
    display: flex;
    justify-content: center;
    width: 8.5%;
`;


export const bookName = css`
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 10px;
    /* overflow:hidden; */
    /* text-overflow:ellipsis; */
    /* white-space:nowrap; */
    font-size: 18px;
    font-weight: 600;
`

export const authorName = css`
    box-sizing: border-box;
    width: 100%;
    /* overflow:hidden; */
    /* text-overflow:ellipsis; */
    /* white-space:nowrap; */
    font-size: 14px;
    font-weight: 400;
    color: #a3a3a3;
`

export const publisherName = css`
    box-sizing: border-box;
    width: 100%;
    /* overflow:hidden; */
    /* text-overflow:ellipsis; */
    /* white-space:nowrap; */
    font-size: 14px;
    font-weight: 400;
    color: #a3a3a3;
`

export const rating = css`
    display: flex;
    /* justify-content: center; */
    align-items: flex-end;
    box-sizing: border-box;
    width: 60%;
    /* margin-top: 40px; */
    /* overflow:hidden; */
    /* text-overflow:ellipsis; */
    /* white-space:nowrap; */
    font-size: 18px;
    /* color: #a3a3a3; */
    /* border: 1px solid; */

    & > span {
        font-weight: bold;
        font-size: 22px;
        margin-left: 5px;
    }
`

export const review = css`
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
   flex: 1;
    
    /* overflow:hidden; */
    /* text-overflow:ellipsis; */
    /* white-space:nowrap; */
    font-size: 18px;
    font-weight: 400;
    /* color: #a3a3a3; */

    & > span {
        font-weight: bold;
        font-size: 20px;
        margin-left: 5px;
    }
`

export const page = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-top: 1px solid #dbdbdb;
    width: 100%;
    height: 7%;
`;