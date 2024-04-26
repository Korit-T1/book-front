import { css } from "@emotion/react";

export const headerLayout = css`
    border-bottom: 1px solid #dbdbdb;
`;

export const header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const headerLeft = css`
    display: flex;
    align-items: center;
`

export const brandLogo = css`
    font-size: 24px;
    text-decoration: none;
    font-weight: bold;
    color: #222222;
`

export const menuNav = css`
    box-sizing: border-box;
    list-style: none;
    display: flex;
    align-items: center;
    margin-left: 20px;
    height: 50px;

    & > a {
        transition: all 0.2s ease-in-out;
        margin-right: 25px;
        text-decoration: none;
        color: #222222;
        font-weight: 600;
    }

    & > a:hover {
        font-size: 18px;
    }
`

export const accountNav = css`
    text-decoration: none;
`

export const accountBox = css`
    box-sizing: border-box;
    border: 2px solid #dbdbdb;
    border-radius: 50%;
    width: 40px;
    height: 40px;
`   