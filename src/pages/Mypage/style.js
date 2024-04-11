import { css } from "@emotion/react";

// 바디
export const bodyLayout = css`
    display: flex;
    margin: 0 auto;
    background-color: #dbdbdb;
    max-width: 1200px;
    height: 100%;
`;

export const left = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 250px;
`;

export const profile = css`
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 250px;
`;

export const imageBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #d67c7c;
    width: 250px;
    height: 230px;
`;

export const image = css`
    border-radius: 50%;
    width: 180px;
    height: 180px;
    border: 1px solid;
`;

export const bottomBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #d6b686ff;
    width: 250px;
    flex-grow: 1;
`;

export const sideMenu = css`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */

    flex-direction: column;
    flex-grow: 1;

    background-color: #a8ec5f;
    width: 250px;
    height: 600px;
`;

export const menuItem = css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid black;
    width: 100%;
    height: 50px;
    cursor: pointer;

    color: black;
    font-weight: 600;
    text-decoration: none;
    
    &:nth-of-type(1) {
        border-top: 1px solid black;
    }
    
    &:hover {
        background-color: #3ad53c
    }
    &:active {
        background-color: #45cf77;
    }
`;

export const right = css`
    /* display: flex; */
    width: 950px;
    height: 100%;
`;
