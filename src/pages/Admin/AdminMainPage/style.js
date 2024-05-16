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
export const header = css`
    display: flex;
    width: 95%;
    height: 80px;
    margin-top: 10px;
    justify-content: center;
    background-color: white;
`
export const title = css`
    text-decoration: none;
    font-weight: bold;
    color: #222222;
    & > p {
        margin: 0;
        font-size: 90px;
    }
`
export const box = css`
    box-sizing: border-box;
    display: flex;
    padding: 10px;
    justify-content: center;
    margin-top: 10px;
    width: auto;
    height: auto;
`


export const visitantBox = css`
    border: 1px solid #dbdbdb;
    width: 550px;
    height: 300px;
    background-color: white;
    margin-right: 15px;
    margin-bottom: 15px;
`;
export const membership = css`
    border: 1px solid #dbdbdb;
    width: 550px;
    height: 300px;
    background-color: white;
`
export const loanBox = css`
    border: 1px solid #dbdbdb;
    width: 95%;
    height: 400px;
    background-color: white;
    margin-bottom: 10px;
    overflow-y: scroll;
    position: relative;
`
export const returnBox = css`
    border: 1px solid #dbdbdb;
    width: 95%;
    height: 400px;
    background-color: white;
    overflow-y: scroll;

`
export const boxHead = css`
    position: sticky;
    top: 0;
    border-bottom: 1px solid black;
    margin: 0px;
    z-index: 50;
    background-color: white;
`
export const headFont = css`
    margin-top: 5px;
    margin-bottom: 5px;
`
export const table = css`
    position: relative;
`
export const tableHead = css`
    position: sticky;
    top: 10px;
    background-color: white;
    z-index: 1;
`
export const scrollContainer = css`
    overflow-y: auto;
`