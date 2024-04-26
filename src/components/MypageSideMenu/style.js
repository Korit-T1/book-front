import { css } from "@emotion/react";

export const profile = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    flex-direction: column;
    width: 100%;
    height: 45%;
    border-bottom: 1px solid #dbdbdb;
    
`;

export const menuBox = css`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;

    width: 100%;
    flex: 1;
    /* background-color: #4f8ee7; */
`;

export const menus = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;
    border-bottom: 1px solid #dbdbdb;
    background-color: white;
    
    cursor: pointer;
`;

export const menu = css`
    text-decoration: none;
    /* border: 1px solid; */
    font-size: 20px;
`;

export const image = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 180px;
    height: 180px;

    overflow: hidden;

    cursor: pointer;
    & > img {
        /* width: 100%; */
        height: 100%;
    } 
`;

export const role = css`
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const right = css`
    /* background-color: #4de6bd; */
    height: 100%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex: 1;
    flex-direction: column;
`;