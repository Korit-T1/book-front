import { css } from "@emotion/react";

export const inputBox1 = css`
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    width: 300px;

`;

export const abc = css`
    display: flex;
`

export const input = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 10px 30px 10px 15px;
    background-color: white;
    border-radius: 3px;
    margin-top: 1px;
    width: 100%;
    height: 45px;
    font-size: 15px;

    :focus {
        outline: 1px solid;
    }
`;