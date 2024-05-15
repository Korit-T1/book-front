import { css } from "@emotion/react";

export const inputBox1 = css`
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    width: 300px;
    margin-top: 10px;
    max-height: 58px;
    /* margin-bottom: 22px; */
    /* box-sizing: border-box;
    border: 1px solid black; */


`;

export const abc = css`
    display: flex;
`

export const input1 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 10px 30px 10px 15px;
    background-color: white;
    border-radius: 3px;
    width: 100%;
    max-height: 50px;
    font-size: 15px;

    :focus {
        outline: 1px solid;
    }
`;

export const input2 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 10px 30px 10px 15px;
    background-color: white;
    border-radius: 3px;
    width: 100%;
    height: 100%;
    font-size: 15px;

    :focus {
        outline: 1px solid;
    }
`;

export const inputIcon = (type) => css`
    /* position: absolute;
    top: 10px;
    right: 10px; */
    width: 8%;
    color: ${type === 'error' ? "#ff6161" : "#00921b"};
`;
    
export const messageBox = (type) => css`
    /* flex: 1; */
    padding-top: ${type === "error" ? "1px" : 0};
    width: 92%;
    color: ${type === 'error' ? "#ff6161" : "#00921b"};
    font-size: 11px;
    font-weight: 600;
`;

export const blank = css`
    width: 300px;
    height: 60px;

    /* box-sizing: border-box;
    border: 1px solid; */
`
