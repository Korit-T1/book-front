import { css, keyframes } from "@emotion/react";

export const show = css`    
    position: relative;
    margin-bottom: 20px;
    /* border: 1px solid; */
    display: flex;
    width: 1300px;
    overflow: hidden;
    align-items: flex-end;
`

export const info = css`
    position: absolute;
    z-index: 2;
`;

export const compartment = (curSlide) => css`
    width: 100%;
    flex-shrink: 0;

    transform: translateX(${-1300 * curSlide}px);
    transition: all 0.5s ease-in-out;
    & > h1 {
        margin: 40px 70px 0px;
        font-size: 60px;
        line-height: 70px;
    }

    & > img {
        height: 100%;
    }
`
export const sss = () => {
    const motion = keyframes`
        0% {margin-top: 0px;}
        100% {margin-top: 10px;}
    `
    return css`
        width: 60px;
        height: 60px;
        overflow: hidden;

        top: 35px;
        left: 465px;

        animation: ${motion} 0.3s linear 0s infinite alternate;
        margin-top: 0;
        position: absolute;

        z-index: 2;
        & > img {
            width: 100%;
            height: 100%;
        }
    `
}



export const prev = css`
    position: absolute;
    transform: translateY(-50%);
    left: 0;
    top: 50%;
    z-index: 2;
    border: none;
    outline: none;
    font-size: 100px;
    background-color: transparent;
    cursor: pointer;
    color: #222222;
`;

export const next = css`
    position: absolute;
    transform: translateY(-50%);
    right: 0;
    top: 50%;
    z-index: 2;
    border: none;
    outline: none;
    font-size: 100px;
    background-color: transparent;
    cursor: pointer;
    color: #222222;
`;