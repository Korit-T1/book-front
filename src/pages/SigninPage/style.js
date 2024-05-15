import { css } from "@emotion/react";

export const layout = css`
    @font-face {
        font-family: 'TTHakgyoansimMabeopsaR';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_keris@1.0/TTHakgyoansimMabeopsaR.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    display: flex;
    align-items: center;
    place-items: center;
    flex-direction: column;
    margin-left: auto;
    /* border-left: 1px solid #dbdbdb; */
    margin-right: auto;
    /* border-right: 1px solid #dbdbdb; */
    width: 600px;
    height: 100vh;
    background-color: white;

    & > h1 {
        margin-top: 120px;
        font-family: 'TTHakgyoansimMabeopsaR';
        font-size: 70px;
    }
`;

export const footer1 = css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    bottom: 0;
    height: 60px;
    width: 100%;
    border: 1px solid #dbdbdb;
    text-align: center;
    font-size: 15px;
    border-radius: 3px;
`;

export const find = css`
    margin-top: 15px;
    font-size: 15px;
    width: 50%;
    display: flex;
    justify-content: space-evenly;

    & > a {
        text-decoration: none;
        color: #494949;
    }
`;

export const btns = css`
    margin-top: 60px;
    display: flex;
    /* border: 1px solid;
    box-sizing: border-box; */
    justify-content: center;
    align-items: center;
    flex-direction: column;

    font-weight: bold;
`;

export const buttonUp = css`
    box-sizing: border-box;
    border: 1px solid rebeccapurple;
    border-radius: 3px;
    width: 300px;
    height: 55px;
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
`

export const buttonDown = css`
    box-sizing: border-box;
    border: 1px solid #bebebe;
    border-radius: 3px;
    width: 300px;
    height: 55px;
    font-size: 20px;
    margin-top: 10px;
    background-color: #ffffff;
    font-weight: bold;
    color: #000000;
    cursor: pointer;
    
    & a {
        text-decoration: none;
        color: #3f3f3fdb
    }

    &:hover {
        background-color: #dbdbdb;
        transition: background-color 0.7s;
    }
`;