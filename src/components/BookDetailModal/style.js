import { css } from "@emotion/react";

export const container = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
`
export const boxButton = css`
    position: absolute;
    
`
export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 100%;
    overflow: hidden;
    box-shadow: 0px 0px 4px #000000b6;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 10px #000000a1;
    }

    & > img {
        width: 100%;
    }
`
export const infoBox = css`
    border: 1px none;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 55%;
    height: 100%;
    margin-left: 20px;
`
export const bookInfo = css`
    border: 1px solid #dbdbdb;
    padding: 0px 15px;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`
export const stockInfo = css`
    border: 1px solid #dbdbdb;
    margin-bottom: 10px;
`
export const reviewArea = css`
    width: 100%;
    height: 120px;
    resize: none;
`
export const Base = css`                            //styled.section
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Name = css`                             //styled.span
  font-size: 1.4rem;
  line-height: 100%;
`;

export const RatingValue = css`                          //styled.span
  font-size: 1.2rem;
  line-height: 100%;
`;

export const RatingField = css`                 //styled.fieldset
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  input:checked ~ label,
  labeL:hover,
  labeL:hover ~ label {
    transition: 0.2s;
    color: orange;
  }
`;
export const reviewContent = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`