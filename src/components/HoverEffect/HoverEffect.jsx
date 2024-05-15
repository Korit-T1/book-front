import React from 'react';
import { inputStyle } from './style';


const HoverEffect = () => {
  return (
    <input
      type="text"
      style={inputStyle}
      placeholder="추가할 내용을 작성해주세요.test입니다."
    />
  );
};

export default HoverEffect;
