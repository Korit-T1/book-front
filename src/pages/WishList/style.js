import { css } from "@emotion/react";

export const header = (id) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    /* border-bottom: 1px solid #dbdbdb; */
    width: 100%;
    height: 5%;

    & > div {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 100%;
        border-bottom: 1px solid #dbdbdb;
        border-right: 1px solid #dbdbdb;

        & > a {
            transition: all 0.2s ease-in-out;
            text-decoration: none;
        }

        & > a:hover {
            font-size: 18px;
            font-weight: bold;
        }
    }

    & > div:nth-of-type(${id}) {
        border-bottom: none;
        font-weight: bold;

        & > a {
            font-size: 18px;
        }
    }

    & > div:nth-of-type(5) {
        border-right: none;
    }
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

    padding: 5.5px 4px 4px;
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
    width: 48%;
`

export const top = css`
    box-sizing: border-box;
    /* border: 1px solid; */
    height: 70%;
`;

export const bot = css`
    display: flex;
    box-sizing: border-box;
    /* border: 1px solid; */
    align-items: flex-end;

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
    font-size: 18px;
    font-weight: bold;
`

export const authorName = css`
    box-sizing: border-box;
    width: 100%;
    font-size: 14px;
    color: #a3a3a3;
`

export const publisherName = css`
    box-sizing: border-box;
    width: 100%;
    font-size: 14px;
    color: #a3a3a3;
`

export const rating = css`
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    /* border: 1px solid; */
    width: 60%;
    font-size: 18px;

`

export const starBox = css`
    display: flex;
    /* border: 1px solid; */
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;

    & > :nth-of-type(1){
        padding-top: 1px;
        padding-right: 3px;
    }
`;

export const rateBox = css`
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 20px;
    font-weight: bold;
`;

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