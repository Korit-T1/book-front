import { css } from "@emotion/react";

export const background = css`
    background-color: #1e1e1e;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const layout = css`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    place-items: center;
    border-radius: 7px;
    flex-direction: column;
    width: 500px;
    height: 500px;
    background-color: white;
    
`;

export const image = css`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 40px;
    margin-bottom: 40px;

    & > img {
        width: 100%;
        height: 100%;
    }
`

export const inputBox = css`
    border-color: white;
    border-bottom: 1px solid black;
`;

export const go = css`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 40px;
    margin-bottom: 20px;
    cursor: pointer;

    & > img {
        width: 100%;
        height: 100%;
    }
`