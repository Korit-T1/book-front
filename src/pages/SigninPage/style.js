import { css } from "@emotion/react";


export const layout = css`
    z-index:30;
    border-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 600px;
    height: 80vh;
    //border-left: 1px solid #dbdbdb;
    //border-right: 1px solid #dbdbdb;
`;

export const section1 = css`
    box-sizing: border-box;
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    width: 50%;
    height: 6%;
    margin: 25px 0 0;
    font-size: 20px;
    color: #423a3a;
    cursor: pointer;
`;


export const section2 = css`
    box-sizing: border-box;
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    width: 50%;
    height: 6%;
    margin: 25px 0 0;
    font-size: 20px;
    color: #dbdbdb;
    cursor: pointer;
    

`;

export const footer1 = css`
    position: fixed;
    left: 0;
    bottom: 0;
    height: 120px;
    width: 100%;
    background-color: white;
    border: 1px solid #dbdbdb;
    text-align: center;
    font-size: 12px;
    /* border-radius: 3px; */
`;

export const find = css`

text-align: right;  //right???

`;


export const findID = css`
    
    display :inline-block;
    font-size: 20px;
    border: none;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #eeeeee;
    }
`;

export const findPW = css`

    display :inline-block;
    font-size: 20px;
    border: none;
    background-color: white;

    cursor: pointer;

    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #eeeeee;
    }
`;

export const button1 = css`


`;