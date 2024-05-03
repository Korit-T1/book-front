import { css } from "@emotion/react";

export const layout = css`
    border: 1px solid #dbdbdb;
    width: 96%;
    height: 95%;

    h1, h2, h3, h4, h5, p {
        margin: 0px;
        padding: 0px;
        font-weight: lighter;
    }

    h1 {
        font-weight: bold;
        font-size: 35px;
    }

    p {
        font-size: 25px;

        & > span {
            font-weight: bold;
            font-size: 30px;
        }
    }
`;

export const activitys = css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    /* border: 1px solid black; */
    width: 100%;
    height: 140px;
    margin-bottom: 20px;
`;

export const activity = css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    border: 1px solid #dbdbdb;
    width: 90%;
    height: 80%;

    & > div {
        border-right: 1px solid #dbdbdb;
    }

    & > div:nth-of-type(3) {
        border-right: none;
    }
`;

export const act = css`
    display: flex;
    box-sizing: border-box;
    flex: 1;
    flex-direction: column;
    /* justify-content: center; */

`;

export const title = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    /* border: 1px solid; */
`;

export const info = css`
    display: flex;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    /* flex: 1 */
`;

export const activitys2 = css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border-top: 1px solid #dbdbdb;
    width: 100%;
    height: 500px;

    & > div:nth-of-type(1) {
        border-right: 1px solid #dbdbdb;
    }
`;

export const activity2 = css`
    box-sizing: border-box;
    /* border: 1px solid black; */
    width: 50%;
    height: 100%;
`;

export const a = css`
    height: 10%;
    background-color: cadetblue;
`;

export const favorite = css`
    display: flex;
    height: 30%;
    background-color: antiquewhite;
`;  

export const favoriteInfo = css`
    width: 70%;
    box-sizing: border-box;
    border: 1px solid;
`

export const favoriteIcon = css`
    width: 30%;
    box-sizing: border-box;
    border: 1px solid;
    overflow: hidden;

    & > img {
        width: 100%;
        height: 100%;
    }
`

export const most = css`
    height: 60%;
    background-color: #dbdbdb
`;  

export const bookInfo = css`
    
`;

export const bookImage = css`
    
`;