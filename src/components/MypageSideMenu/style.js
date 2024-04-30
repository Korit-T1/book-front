import { css } from "@emotion/react";

export const profile = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    
    flex-direction: column;
    width: 100%;
    height: 45%;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
`;

export const menuBox = (id) => css`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;

    width: 100%;
    flex: 1;

    & > div {
        border-right: 1px solid #dbdbdb;
        border-bottom: 1px solid #dbdbdb;
    }

    & > div:nth-child(${id}) {
        border-right: 1px solid white;
        font-weight: bold;
    }

    & > div:nth-of-type(6) {
        border-bottom: none;
    }
`;

export const menus = css`
    /* box-sizing: border-box; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
    
    background-color: white;
    cursor: pointer; 

    & > a {
        transition: all 0.2s ease-in-out;
        text-decoration: none;
    }

    & > a:hover {
        font-size: 22px;
        font-weight: bold;
    }
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