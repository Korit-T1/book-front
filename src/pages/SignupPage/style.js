import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    place-items: center;
    flex-direction: column;
    margin: auto;
    width: 600px;
    height: 98vh;
    border: 1px solid #c1c1c1;
    margin-top: 6px;
    background-color: white;
    & > * {
        margin-bottom: 5px; /* 원하는 마진 값으로 변경 */
    }
`;

export const button2 = css`
    box-sizing: border-box;
    border: 1px solid rebeccapurple;
    border-radius: 3px;
    margin-top: 20px;
    width: 300px;
    height: 50px;
    font-size: 20px;
    background-color: #ffffff;
    color: rebeccapurple;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        color: #ffffff;
        background-color: rebeccapurple;
        transition: background-color 0.7s;
    }
`;

export const section1 = css`
    box-sizing: border-box;
    border: 1px solid red;
    border-radius: 1px;
    width: 100px;
    height: 25px;
    margin: auto;
    font-size: 10px;
    cursor: pointer;
    
`;

export const selects = css`
    display: flex;
    margin-bottom: 14.5px;
    width: 300px;
    justify-content: space-between;
`;

export const births = css`
    display: flex;
    width: 300px;
    justify-content: space-between;
`;

export const selection = css`
    min-width: 149px;
`
