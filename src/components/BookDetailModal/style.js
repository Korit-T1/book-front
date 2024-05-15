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
    box-sizing: border-box;
    border: 1px solid;
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
  border: 1px solid;
  box-sizing: border-box;
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
  border: none;
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
  span {
    font-weight: bold;
    font-size: 30px;
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
  border: 1px solid #dbdbdb;

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
    margin-top: 3.5px;
  }
  
  span:nth-of-type(2) {
    margin-left: 10px;
    /* font-family: 'Freesentation-5Black'; */
    font-weight: bold;
    font-size: 25px;
    color: #8d8d8d;
    margin-top: 22px;
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
  box-sizing: border-box;
  justify-content: space-between;
  border: 1px solid #dbdbdb;
  height: 300px;

  p, span {
    margin: 0;
  }


`;

export const reviewPages = css`
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  height: 40px;
`;

export const reviewContent = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  background-color: #f4f4f4;
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  height: 22%;

`;

export const reviewContentLeft = css`
  width: 415px;
  /* box-sizing: border-box;
  border: 1px solid; */

  div:nth-of-type(1) {
    height: 70%;
  }
  div:nth-of-type(2) {
    display: flex;
    height: 30%;

    div:nth-of-type(1) {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      width: 75%;
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
  div:nth-of-type(1) {
    margin-left: 5px;
  }
  div:nth-of-type(2) {
    p {
      padding-left: 5px;
      font-size: 18px;
    }
  }
`;

export const bottom = css`
  display: flex;
  height: 130px;
  box-sizing: border-box;
  border: 1px solid;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Base = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* box-sizing: border-box;
  border: 1px solid;  */
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
/* box-sizing: border-box;
  border: 1px solid; */
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
  width: 50%;
`;

export const base2 = css`
  width: 25%;
`;

export const base3 = css`
  width: 25%;
`;

