import { css, keyframes } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;

    h1 {
        margin: 0px;
        padding: 0px;
        font-size: 35px;
    }
`;

export const slideBackground = css`
    box-sizing: border-box;
    border: 1px solid black;
    height: 600px;

    & > img {
        
    }
`;

export const navigationBar = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 100px;
    /* border: 1px solid black; */
`;

export const category = css`
    box-sizing: border-box;
    border-radius: 30px;
    /* border: 1px solid black; */
    background-color: #f0f0f0;
    width: 80px;
    height: 80px;
`;

export const title = css`
    display: flex;
    align-items: center;
    height: 70px;
    margin-top: 20px;
    margin-bottom: 10px;

    & > h1 {
        font-size: 50px
    }
`;

export const newIcon = () => {
    const motion = keyframes`
        0% {margin-top: 0px;}
        100% {margin-top: 12px;}
    `
    return css`
        margin-bottom: 8px;
        margin-left: 12px;
        animation: ${motion} 0.3s linear 0s infinite alternate;
    `
}


export const title2 = css`
    display: flex;
    align-items: center;
    height: 70px;
    margin-top: 35px;

    & > h1 {
        font-size: 50px
    }
`;

export const graph = css`
    padding-bottom: 12.5px;
    margin-left: 12px;
`;

export const ranking = css`
    padding-bottom: 10px;
    margin-left: 16px;
`;

export const subContainer = css`
    width: 50%;
    height: 300px;
    /* border: 1px solid; */
`;

export const container = css`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    /* text-align: center; */
    width: 100%;
    height: 400px;
    /* border: 1px solid; */
`;

export const containerRank = css`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    /* text-align: center; */
    width: 100%;
    height: 540px;
    /* border: 1px solid; */
`;

export const containerNew = css`
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: space-between;
    /* align-items: flex-end; */
    /* text-align: center; */
    width: 100%;
    height: 1100px;
    /* border: 1px solid; */
`;

export const num = css`
    position: absolute;
    top: -25px;
    left: 0px;
`;

export const num1 = css`
    margin-left: 1.5px;
    margin-right: 20px;
`;

export const first = css`
    position: relative;
`;

export const first2 = css`
    position: relative;
`;

export const medal = css`
    position: absolute;
    top: 0px;
    right: 0px;
`;

export const item =  css`
    box-sizing: border-box;
    /* border: 1px solid black; */
    width: 200px;
    height: 400px;


`;

export const itemNew =  css`
    box-sizing: border-box;
    /* border: 1px solid black; */
    width: 220px;
    height: 500px;


`;

export const bookImage =  css`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    height: 75%;
    /* overflow: hidden; */

    &:hover {
        box-shadow: 0px 0px 10px #00000044;
    }
    cursor: pointer;
    
    & > img {
        width: 100%;
        height: 100%;
        border: 1px solid #dbdbdb;
        box-sizing: border-box;
    }
`;

export const bookImage2 =  css`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    height: 65%;
    /* overflow: hidden; */

    &:hover {
        box-shadow: 0px 0px 10px #00000044;
    }
    cursor: pointer;
    
    & > img {
        width: 100%;
        height: 100%;
        border: 1px solid #dbdbdb;
        box-sizing: border-box;
    }
`;

export const bookInfo =  css`
    display: flex;
    flex-direction: column;
    height: 30%;
`;

export const categoryName = css`
    margin-top: 10px;
    box-sizing: border-box;
    width: 100%;
    font-size: 17px;
    color: #a3a3a3;
`

export const bookName = css`
    box-sizing: border-box;
    width: 100%;
    padding: 5px 0px 10px;
    font-size: 21px;
    font-weight: bold;
`

export const authorAndPublisher = css`
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    color: #a3a3a3;
`

export const Rank = (index) => {
    const size = 1100 * ((5 - (index * 0.6)) * 5 / 100);
    const font = (index - 24) * (-1);

    return css`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: ${size}px;

        & > div:nth-of-type(1) {    // first
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            width: 100%;
            height: 75%;
            
            & > div:nth-of-type(1) {    // first2
                display: flex;
                width: 100%;
                height: ${size + 90}px;
                cursor: pointer;

                &:hover {
                    box-shadow: 0px 0px 10px #00000044;
                }

                & > img {
                    box-sizing: border-box;
                    border: ${index === 0 ? "4px solid" : "1px solid #dbdbdb"};
                    border-image: ${index === 0 && "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);"}; 
                    border-image-slice: 1;
                    width: 100%;
                }   
            }
        }

        & > div:nth-of-type(2) {
            height: 25%;
            & > div:nth-of-type(1) {
                margin-top: 10px;
                font-size: ${font - 6}px;
            }
            & > div:nth-of-type(2) {
                font-size: ${font - 3}px;
            }
            & > div:nth-of-type(3) {
                font-size: ${font - 6}px;
            }
        }
    `;
}

export const aa = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100px;
    height: 27px;
    /* border: 1px solid; */
    border-radius: 3px;
    position: absolute;
    top: -31px;
    left: 0px;
    background-color: #00DBDE;
    background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);

    & > h4 {
        color: white;
    }
`;