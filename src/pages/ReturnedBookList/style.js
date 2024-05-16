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
        width: 25%;
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

    & > div:nth-of-type(4) {
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
    /* border: 1px solid black; */
    /* border-radius: 20px; */
`;

export const bookData = css`
    display: flex;
    width: 100%;
    height: 90%;
    /* border: 1px solid; */
`;

export const statusBox = css`
    display: flex;
    justify-content: center;
    width: 10%;
    height: 50%;
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
`;

export const top = css`
    box-sizing: border-box;
    /* border: 1px solid; */
    height: 70%;
`;

export const bot = (id) => css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-end;
    /* border: 1px solid; */
    flex: 1;

    & > div:nth-of-type(1) {
        & > p {
            margin: 0px 0px 0px 5px;
            padding-top: 7px;
            /* font-weight: bold; */
        }
    }

    & > div:nth-of-type(2) {
        & > p {
            margin: 0px 0px 0px 5px;
            padding-top: 6px;
            /* font-weight: bold; */
        }
    }
`;


export const period = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;

    & > p {
        padding-bottom: 6px;
    }
`

export const finish = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;

    & > p {
        padding-bottom: 8px;
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