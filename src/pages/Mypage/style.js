import { css } from "@emotion/react";

// 바디
export const back = css`
    position: absolute;
    top: 82px;
    left: 0;
    z-index: -10;
    /* background-color: rebeccapurple; */
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);

    height: 300px;
    width: 100vw;
`

export const bodyLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 10px;
    display: flex;
    margin: 40px auto 0px;
    max-width: 1100px;
    height: 100%;
    border: 1px solid black;
    background-color: white;
    height: 665px;
`;

export const body = css`
    box-sizing: border-box;
    display: flex;
    width: 97%;
    height: 95%;
    background-color: white;
    border: 1px solid #dbdbdb;
    /* border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb; */
`;

export const left = css`
    display: flex;
    flex-direction: column;
    width: 23%;
    height: 100%;
    /* border-right: 2px solid black; */
`;

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

export const menus = (activeMenu) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;
    border-bottom: 1px solid #dbdbdb;
    background-color: ${activeMenu ? "rebeccapurple" : "white"};
    
    cursor: pointer;
`;

export const menu = (activeMenu) => css`
    text-decoration: none;
    font-size: 20px;
    color: ${activeMenu ? "white" : ""};
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
    justify-content: center;
    align-items: center;
    flex: 1;
    flex-direction: column;
`;

// export const profile = css`
//     display: flex;
//     flex-direction: column;
//     height: 350px;
//     width: 250px;
// `;

// export const imageBox = css`
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     background-color: #d67c7c;
//     width: 250px;
//     height: 230px;
// `;

// export const image = css`
//     border-radius: 50%;
//     width: 180px;
//     height: 180px;
//     border: 1px solid;
// `;

// export const bottomBox = css`
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     background-color: #d6b686ff;
//     width: 250px;
//     flex-grow: 1;
// `;

// export const sideMenu = css`
//     display: flex;
//     /* justify-content: center; */
//     /* align-items: center; */

//     flex-direction: column;
//     flex-grow: 1;

//     background-color: #a8ec5f;
//     width: 250px;
//     height: 600px;
// `;

// export const menuItem = css`
//     display: flex;
//     box-sizing: border-box;
//     justify-content: center;
//     align-items: center;

//     border-bottom: 1px solid black;
//     width: 100%;
//     height: 50px;
//     cursor: pointer;

//     color: black;
//     font-weight: 600;
//     text-decoration: none;
    
//     &:nth-of-type(1) {
//         border-top: 1px solid black;
//     }
    
//     &:hover {
//         background-color: #3ad53c
//     }
//     &:active {
//         background-color: #45cf77;
//     }
// `;

// export const right = css`
//     /* display: flex; */
//     width: 950px;
//     height: 100%;
// `;
