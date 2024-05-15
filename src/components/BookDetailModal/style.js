import { css } from "@emotion/react";

export const container = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 625px;
`
export const boxButton = css`
    position: absolute;
    
`
export const imgBox = css`
    /* box-sizing: border-box;
    border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 49%;
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
  /* border: 1px solid;
  box-sizing: border-box; */
  justify-content: center;
  align-items: center;
  width: 49%;
  height: 100%;
`

export const btns = css`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  box-sizing: border-box;
  height: 40px;
`

export const btn = css`
  width: 50%;
  background-color: white;
  border: 1px solid black;
  box-sizing: border-box;
  cursor: pointer;
`

export const bookInfo = css`
    border: 1px solid #dbdbdb;
    
    /* padding: 0px 15px; */
    margin-bottom: 10px;
    /* text-overflow: ellipsis; */
    /* white-space: nowrap; */
    overflow: hidden;
    height: 200px;
    & > h1 {
      font-size: 40px;
      margin: 0;
      padding: 0;
    }
`

export const bookRate = css`
  border: 1px solid #dbdbdb;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 30px;
  }
`

export const bookRateL = css`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 40%;
`

export const bookRateC = css`
  width: 10%;
  height: 30px;
  margin-bottom: 2px;
`

export const bookRateR = css`
  width: 40%;
  margin-left: 40px;

  p {
    margin: 0px;
    margin-top: 10px;
    font-size: 22px;
  }
`

export const stockInfo = css`
    border: 1px solid #dbdbdb;
    height: 285px;

    & > table, th, td {
      border-collapse: collapse;
      border: 1px solid black;
      font-size: 20px;
    }

    th, td {
      height: 50px;
    }

    td {
      min-width: 100px;
      text-align: center;
    }
`
export const summary = css`
  @font-face {
      font-family: 'Freesentation-9Black';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-9Black.woff2') format('woff2');
      font-weight: 900;
      font-style: normal;
  }
  /* @font-face {
      font-family: 'Freesentation-5Black';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-9Black.woff2') format('woff2');
      font-weight: 100;
      font-style: normal;
  } */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 8px;

  h2 {
    margin: 0;
  }
`;

export const sumLeft = css`
  & > h2 > span {
    color: orange;
  }
`;

export const sumRight = css`
  display: flex;
  /* box-sizing: border-box;
  border: 1px solid; */

  flex: 1;
`;

export const starBox = css`
  display: flex;
  align-items: center;
`;

export const scoreBox = css`
  display: flex;

  span:nth-of-type(1) {
    font-size: 45px;
    font-family: 'Freesentation-9Black';
    margin-left: 5px;
    margin-top: 6px;
  }
  
  span:nth-of-type(2) {
    margin-left: 10px;
    /* font-family: 'Freesentation-5Black'; */
    font-weight: bold;
    font-size: 25px;
    color: #8d8d8d;
    margin-top: 24.5px;
  }


`;




export const reviewArea = css`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  resize: none;
  font-size: 18px;
  border: 1px solid #dbdbdb;
  :focus {
    outline: none;
  }
`


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

export const reviewBox = css`
  display: flex;
  flex-direction: column;
  /* box-sizing: border-box;
  border: 1px solid #dbdbdb; */
  justify-content: flex-start;
  align-items: center;
  height: 300px;

  p, span {
    margin: 0;
  }

  div:nth-of-type(1),
  div:nth-of-type(2),
  div:nth-of-type(3) {
    margin-bottom: 9px;
  }
`;

export const reviewPages = css`
  /* /* box-sizing: border-box; */
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const reviewContent = css`
  width: 98%;
  display: flex;
  flex-direction: row;
  
  background-color: #f4f4f4;
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  height: 22%;

`;

export const reviewContentLeft = css`
  width: 415px;
  height: 100%;
  /* box-sizing: border-box;
  border: 1px solid; */

  div:nth-of-type(1) {
    height: 60%;
    & > p {
      padding: 0px 0px 0px 3px;
    }
  }
  div:nth-of-type(2) {
    display: flex;
    margin-bottom: 2px;

    div:nth-of-type(1) {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      width: 72%;
    }
    div:nth-of-type(2) {
      height: 100%;
      display: flex;
      justify-content: center;
      width: 5%;
    }
    div:nth-of-type(3) {
      height: 100%;
      display: flex;
      justify-content: center;
      width: 20%;
    }
  }
`;

export const reviewContentRight = css`
  width: 65px;
  /* box-sizing: border-box;
  border: 1px solid; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  div:nth-of-type(1) {
    margin-left: 5px;
  }
  div:nth-of-type(2) {
    p {
      padding-bottom: 2px;
      padding-left: 5px;
      font-size: 20px;
    }
  }
`;

export const bottom = css`
  display: flex;
  height: 140px;
  /* box-sizing: border-box;
  border: 1px solid #dbdbdb; */
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 5px;
`;

export const Base = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;

  div:nth-of-type(2) {
    height: 35px;
    span:nth-of-type(1) {
        font-weight: bold;
        font-size: 30px;
      } 
    }

    div:nth-of-type(1) {

    }
`;

export const comment = css`
    display: flex;
    height: 80px;
`

export const submit = css`
  width: 100px;
  height: 35px;
  background: none;
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  cursor: pointer;

  :hover {
    background-color: #dbdbdb;
  }
`

export const base1 = css`
  width: 35%;
`;

export const base2 = css`
  width: 25%;
`;

export const base3 = css`
  margin-bottom: 6px;
  margin-left: 96px;
  width: 20%;
`;


export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const pageCount = css`
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: white;
    color: #777777;
    cursor: default;
`;

export const pageNumbers = css`
    display: flex;
`;

export const pageButton = (isSelected) => css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3px;
    border: ${isSelected ? "none" : "1px solid #dbdbdb"};
    /* border-radius: 2px; */
    min-width: 30px;
    height: 30px;
    background-color: ${isSelected ? "#dbdbdb" : "white"};
    text-decoration: none;
    font-size: 14px;
    color: ${isSelected ? "white" : "#777777"};
    cursor: pointer;
`;

