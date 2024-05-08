/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const inputStyle = css`
  &:focus {
    outline: none !important;
    border-color: #d6a8e9;
    box-shadow: 0 0 10px #d6a8e9;
  }
`;

<input
  type="text"
  placeholder="추가할 내용을 작성해주세요."
  css={inputStyle}
/>
