import { css } from "@emotion/react";
import a from "../../assets/levelUP.png"

export const center = css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    margin-top: 20px;
    width: 92%;
    height: 90%;
    /* border: 1px solid #dbdbdb; */
`;

export const top = css`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 70%;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rebeccapurple;
    
    div:nth-of-type(1) {
        margin-top: 70px;
        margin-bottom: 35px;
    }

    h1 {
        margin: 0px;
        color: rebeccapurple;
    }

    h3, h4 {
        margin: 0px 0px 10px 0px;
        font-weight: lighter;
    }
`;

export const checkContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
    p {
        margin: 0px 0px 0px 5px;
        font-weight: bold;
    }
`;

export const checkBox = css`
    width: 20px;
    height: 20px;
    accent-color: rebeccapurple;
    border-radius: none;
`;

export const bot = css`
    display: flex;
    align-items: center;
    justify-content: center;
    /* box-sizing: border-box;
    border: 2px solid rebeccapurple; */
    height: 20%;
    width: 100%;
`;

export const buttons = css`
    display: flex;
    justify-content: space-evenly;
    width: 500px;
    /* box-sizing: border-box;
    border: 1px solid black; */

    & > button {
        width: 200px;
        height: 50px;
        border: none;
        cursor: pointer;
        color: white;
    }
`;

export const btn1 = css`
    background-color: rebeccapurple;
`;

export const btn2 = css`
    background-color: #a1a1a1;
`;