import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
`;

export const headerTitle = css`
    margin-bottom: 30px;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
`;

export const boardListLayout = css`
    border: 1px solid #dbdbdb;
    width: 900px;
    height: 500px;
    padding: 0;
`;

export const boardListHeader = css`
    box-sizing: border-box;
    display: flex;
    border-bottom: 2px solid #dbdbdb;
    width: 100%;

    & > div {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        height: 40px;
        font-weight: 700;
        cursor: default;
        padding: 0 10px; /* 내부 여백 추가 */
    }
    & > div:nth-of-type(1) {
        flex-grow: 0;
        border-right: 1px solid #dbdbdb;
        width: 80px;
        padding: 0; /* 내부 여백 제거 */
    }
`;


export const boardListItem = css`
    color: #222;
    text-decoration: none;
    cursor: pointer;
    & > li {
        box-sizing: border-box;
        display: flex;
        border-bottom: 1px solid #dbdbdb;
        width: 100%;
        &:hover {
            background-color: #eee;
        }
        & > div{
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            height: 40px;
        }
        & > div:nth-of-type(1) {
            flex-grow: 0;
            border-right: 1px solid #dbdbdb;
            width: 80px;
        }
    }
`;
