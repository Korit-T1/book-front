import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    place-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 600px;
    height: 100vh;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    background-color: white;
`;

export const backgroundc = css`
    background: #b681d5;
    background-image: 
    radial-gradient(at 88% 0%,hsla(327, 67%, 64%, 1) 0px, transparent 50%),
    radial-gradient(at 63% 46%, hsla(307, 76%, 61%, 1) 0px, transparent 50%),
    radial-gradient(at 95% 53%, hsla(89, 91%, 67%, 1) 0px, transparent 50%),
    radial-gradient(at 79% 83%, hsla(170, 86%, 65%, 1) 0px, transparent 50%),
    radial-gradient(at 74% 93%, hsla(71, 93%, 75%, 1) 0px, transparent 50%),
    radial-gradient(at 52% 13%, hsla(110, 83%, 72%, 1) 0px, transparent 50%),
    radial-gradient(at 30% 80%, hsla(263, 79%, 66%, 1) 0px, transparent 50%);

`;

export const button2 = css`
    box-sizing: border-box;
    border: 1px solid blue;
    border-radius: 3px;
    width: 300px;
    height: 55px;
    margin: 25px 0 0;
    font-size: 20px;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;

    &:hover {
        background-color: blue;
        transition: background-color 0.7s;
    }
`;


export const inputStyle = css`
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 90%;
    padding: 70px 30px 44px;
    border-radius: 3px;
    text-align: center;
    
`;

export const section1 = css`
    box-sizing: border-box;
    border: 1px solid red;
    border-radius: 1px;
    width: 100px;
    height: 25px;
    margin: auto;
    font-size: 10px;
    cursor: pointer;
    
`;