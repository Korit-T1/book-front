import { css } from "@emotion/react";
import React from "react";
import styled from 'styled-components';



export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    place-items: center;
    flex-direction: column;
    margin-left: auto;
    border-left: 1px solid #dbdbdb;
    margin-right: auto;
    border-right: 1px solid #dbdbdb;
    width: 600px;
    height: 100vh;
    background-color: white;
    
`;

export const inputStyle = css`
    position: fixed;
    z-index: 55;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 90%;
    padding: 70px 30px 44px;
    border-radius: 3px;
    text-align: center;
    
`;

export const signinButton = css`
    background-color: #fd3b38;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    
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

export const button = css`
    box-sizing: border-box;
    border: 1px solid #fd3b38;
    border-radius: 3px;
    width: 300px;
    height: 55px;
    margin: 25px 0 0;
    font-size: 20px;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
    
    & a {
        text-decoration: none;
        color: #000000;
        font-size: 16px;
    }

    &:hover {
        background-color: #fd3b38;
        transition: background-color 0.7s;
    }
`;


export const footer1 = css`
    position: fixed;
    left: 0;
    bottom: 0;
    height: 120px;
    width: 100%;
    border: 1px solid #dbdbdb;
    text-align: center;
    font-size: 20px;
    border-radius: 3px;
`;

export const find = css`

text-align: right;

`;

export const findID = css`
    
    display :inline-block;
    font-size: 20px;
    border: none;
    background-color: white;

`;

export const findPW = css`

    display :inline-block;
    font-size: 20px;
    border: none;
    background-color: white;

`;