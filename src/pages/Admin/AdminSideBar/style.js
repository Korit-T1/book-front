import { css } from "@emotion/react";

export const layout = (show) => css`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: ${show ? "0px" : "-300px"};
    z-index: 99;
    border-right: 1px solid #dbdbdb;
    width: 300px;
    height: 100%;
    transition: left 0.5s ease-in-out;
    background-color: white;
    box-shadow: 1px 0px 2px #00000022;
`;

export const toggleButton = css`
    box-sizing: border-box;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 1px solid #dbdbdb;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 15px;
    height: 50px;
    background-color: white;
    cursor: pointer;
    &:active {
        background-color: #ccc;
    }
`;

export const menuList = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
`;

export const menuItem = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 50px;
    color: black;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    &:nth-of-type(1) {
        border-top: 1px solid #dbdbdb;
    }s
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;