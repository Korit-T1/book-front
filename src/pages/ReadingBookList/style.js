import { css, keyframes } from "@emotion/react";

export const header = (id) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    /* border-bottom: 1px solid #dbdbdb; */
    width: 100%;
    height: 5%;

    & > div {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 100%;
        border-bottom: 1px solid #dbdbdb;
        border-right: 1px solid #dbdbdb;

        & > a {
            transition: all 0.2s ease-in-out;
            text-decoration: none;
        }

        & > a:hover {
            font-size: 18px;
            font-weight: bold;
        }
    }

    & > div:nth-of-type(${id}) {
        border-bottom: none;
        font-weight: bold;

        & > a {
            font-size: 18px;
        }
    }

    & > div:nth-of-type(5) {
        border-right: none;
    }
`;

export const filter = css`
    text-decoration: none;
`;

export const deleteBtn = css`
    text-decoration: none;
`;

export const container = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    padding: 4.5px 4px 4px 6px;
    width: 100%;
    height: 100%;
    /* border: 1px solid; */

    & > h1 {
        color: #606060;
    }   
`;

export const datas = (isChecked) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    /* border: ${isChecked ? "none" : "1px solid #dbdbdb"}; */
    /* border: 1px solid black; */
    border-image-slice: 1;

    margin: 4px;
    width: 470px;
    height: 210px;
`

export const data = (isChecked) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    /* box-sizing: border-box; */

    width: 464px;
    height: 205px;
    border: ${isChecked ? "2px solid" : "1px solid #dbdbdb"};
    border-image: ${isChecked && "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);"}; 
    border-image-slice: 1;
`;

export const bookData = css`
    display: flex;
    width: 100%;
    height: 90%;

    /* border: 1px solid; */
`;

export const checkBox = css`
    display: flex;
    justify-content: center;
    /* border: 1px solid; */
    box-sizing: border-box;
    width: 10%;
    height: 20%;
`;

export const checkBtn = (isChecked) => css`
    cursor: pointer;
    border-radius: 50%;

    /* box-sizing: border-box; */
    color: ${isChecked ? "white" : "#dbdbdb"};
    /* border: ${isChecked && "1px solid #dbdbdb"}; */
    background-image: ${isChecked ? "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);"
    : "white"}
`

export const bookImage = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    overflow: hidden;
    border: 1px solid #dbdbdb;
    
    & > img {
        width: 95%;
        height: 96%;
    } 
`;

export const bookInfo = css`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    margin-left: 10px;
    /* background-color: gray; */
    width: 46%;

    /* box-sizing: border-box;
    border: 1px solid; */
`

export const status = css`
    /* box-sizing: border-box;
    border: 1px solid; */
    justify-content: center;
    flex: 1;
    display: flex;
    padding-right: 2.5px;
`

export const top = css`
    box-sizing: border-box;
    /* border: 1px solid; */
    height: 60%;
`;

export const bookName = css`
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: bold
`

export const authorName = css`
    box-sizing: border-box;
    width: 100%;
    font-size: 14px;
    color: #a3a3a3;
`

export const publisherName = css`
    box-sizing: border-box;
    width: 100%;
    font-size: 14px;
    color: #a3a3a3;
`

export const page = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-top: 1px solid #dbdbdb;
    width: 100%;
    height: 7%;
`;

export const bot = (percentage) => {
    const progressColor =
        percentage > 80 ? '#2f80ea' : 
        percentage > 60 ? '#00cc00' : 
        percentage > 40 ? '#ffff00' : 
        percentage > 20 ? '#ff6600' : '#ff0000'; 

    return css`
        flex: 1;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        /* border: 1px solid; */
        flex-direction: column;
    
        p {
            margin: 0;
        }
    
        progress {
            appearance: none;
            height: 10px;
            width: 210px;
            padding-left: 2px;
        }
    
        progress::-webkit-progress-bar {
            background-color: #dbdbdb;
        }
    
        progress::-webkit-progress-value {
            background-color: ${progressColor}
        }
    `
}

export const time = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    padding-bottom: 5px;

    & > p:nth-of-type(1) {
            margin: 0px 0px 0px 5px;
            padding-top: 2px;
    }
`

export const period = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    
    & > p:nth-of-type(1) {
            margin: 0px 0px 0px 5px;
            padding-top: 1px;
    }
`

export const warn = () => {
    const blinkAnimation = keyframes`
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;

    return css`
        animation: ${blinkAnimation} 2s infinite;
    `
}
