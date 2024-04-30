import { css } from "@emotion/react";

export const layout = css`
    border: 1px solid black;
    width: 95%;
    height: 95%;

    h1, h2, h3, h4, h5 {
        margin: 0px;
        padding: 0px;
    }
`;

export const activitys = css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid black;
    width: 100%;
    height: 200px;
`;

export const activity = css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    border: 1px solid black;
    width: 90%;
    height: 80%;

    & > div {
        border-right: 1px solid black;
    }

    & > div:nth-child(3) {
        border-right: none;
    }
`;

export const act = css`
    display: flex;
    box-sizing: border-box;
    flex: 1;
    flex-direction: column;
`;

export const title = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
`;

export const info = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    flex: 1
`;

export const activitys2 = css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid black;
    width: 100%;
    height: 300px;
`;

export const activity2 = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 45%;
    height: 80%;
`;