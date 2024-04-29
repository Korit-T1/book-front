import { css } from '@emotion/react';



export const practice1 = css`
    
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: gray;
    overflow: hidden;
    
`;


export const practice2 = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: gray;
    overflow: hidden;
    
`;


export const practice = () => {
  return (
    <div css={practice1}>

    </div>
  );
};

export default practice;