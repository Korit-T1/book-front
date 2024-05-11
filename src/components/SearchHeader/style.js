import { css } from "@emotion/react";

export const headerLayout = css`
    background-color: white;
    border-bottom: 1px solid #dbdbdb;
`;

export const header = css`
    display: flex;
    /* border: 1px solid; */
`;

export const headerLeft = css`
    width: 475px;
    display: flex;
    /* box-sizing: border-box; */
    /* border: 1px solid; */
`

export const headerCenter = css`
    width: 350px;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* box-sizing: border-box; */
    /* border: 1px solid; */
`

export const headerRight = css`
    width: 475px;
    display: flex;
    /* box-sizing: border-box;
    border: 1px solid; */
    align-items: center;
`

export const brandLogo = css`
    @font-face {
    font-family: 'TTHakgyoansimMabeopsaR';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_keris@1.0/TTHakgyoansimMabeopsaR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
    text-decoration: none;
    font-weight: bold;
    color: #222222;

    & > p {
        margin: 0px;
        margin-top: 2px;
        font-size: 65px;
        font-family: 'TTHakgyoansimMabeopsaR';
    }
`

export const menuNav = css`
    box-sizing: border-box;
    /* border: 1px solid; */
    list-style: none;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    width: 100%;
    height: 50px;
    padding: 0;

    & > a {
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        color: #222222;
        font-weight: bold;
        font-size: 18px;
    }

    & > a:hover {
        font-size: 22px;
    }
`

export const accountNav = css`
    text-decoration: none;
`

export const accountBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    /* border: 2px solid #dbdbdb; */
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);;
    border-radius: 50%;
    width: 50px;
    height: 50px;

    overflow: hidden;
    
    & > img {
        width: 100%;
        height: 100%;
    }

`   