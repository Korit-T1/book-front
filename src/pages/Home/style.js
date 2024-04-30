import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;

    h1 {
        margin: 0px;
        padding: 0px;
        font-size: 35px;
    }
`;

export const navigationBar = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 100px;
    border: 1px solid black;
`;

export const category = css`

`;

export const title = css`
    display: flex;
    align-items: center;
    margin-top: 10px;
    height: 70px;
`;

export const graph = css`
    padding-bottom: 12.5px;
    margin-left: 10px;
`;

export const ranking = css`
    padding-bottom: 10px;
    margin-left: 15px;
`;

export const container = css`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    /* text-align: center; */
    width: 100%;
    height: 500px;
    /* border: 1px solid; */
`;

export const num = css`
    position: absolute;
    top: -25px;
    left: 0px;
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
    width: 190px;
`;

export const bookImage =  css`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    height: 60%;
    overflow: hidden;

    & > img {
        width: 100%;
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
    box-sizing: border-box;
    width: 100%;
    font-size: 17px;
    color: #a3a3a3;
    padding-top: 20px;
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
    console.log(font);

    return css`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        /* padding: 0px 10px 50px; */
        width: ${size - 30}px;

        height: 100%;
        /* border: 1px solid; */

        & > div:nth-of-type(1) {    // first
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            width: 100%;
            height: 70%;
            /* border: 1px solid black; */
            /* overflow: hidden; */

            & > div:nth-of-type(1) {    // first2
                display: flex;
                width: 100%;
                height: ${size + 40}px;
                /* overflow: hidden; */

                & > img {
                    box-sizing: border-box;
                    border: 1px solid #dbdbdb;
                    /* height: 100%; */
                    width: 100%;
                }   
            }
        }


        & > div:nth-of-type(2) {
            & > div:nth-of-type(1) {
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
