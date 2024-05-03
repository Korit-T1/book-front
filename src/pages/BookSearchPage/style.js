import { css } from "@emotion/react";



export const header = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 100px;
`

export const searchBoxContainer = css`
    position: relative;
    width: 100%;
`

export const select = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 20px;
    border: none;
    outline: none;
    width: 100px;
    height: 40px;
    cursor: pointer;
    & option {
        font-size: 14px;
        color: #222222;
    }
`

export const searchBox = css`
    box-sizing: border-box;
    border: none;
    border-radius: 20px;
    outline: none;
    padding: 5px 50px 5px 130px;
    width: 100%;
    height: 50px;
    font-size: 18px;
    box-shadow: 0px 0px 4px #000000b6;
    cursor: pointer;
    &:focus {
        box-shadow: 0px 0px 10px #000000a1;
    }
`

export const searchButton = css`
    box-sizing: border-box;
    position: absolute;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    right: 20px;
    top: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
`

export const main = css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 30px;
    /* border: 1px solid; */
`

export const card = css`
    box-sizing: border-box;
    border-radius: 10px;
    margin: 10px 1%;
    width: 23%;
    height: 400px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    overflow: hidden;
    box-shadow: 0px 0px 1px #000000b6;
    &:hover {
        box-shadow: 0px 0px 10px #00000044;
    }
    /* border: 1px solid; */
`

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #000000;
    width: 100%;
    height: 70%;
    overflow: hidden;

    & > img {
        width: 100%;
    }
`

export const contentBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px;
    font-size: 14px;
    font-weight: 600;
`

export const bookName = css`
    box-sizing: border-box;
    width: 100%;
    padding: 5px 10px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`

export const authorName = css`
    box-sizing: border-box;
    width: 100%;
    padding: 0px 10px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font-size: 12px;
    font-weight: 400;
    color: #a3a3a3;
`

export const publisherName = css`
    box-sizing: border-box;
    width: 100%;
    padding: 0px 10px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font-size: 12px;
    font-weight: 400;
    color: #a3a3a3;
    
`