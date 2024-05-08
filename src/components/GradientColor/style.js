// import { css } from "@emotion/react";
// //import { css } from "styled-components";
// import { backgroundGradient } from "./GradientColor";
// import React from 'react';
// import styled, { keyframes } from 'styled-components';


// const rotate = keyframes`
//   100% {
//     transform: rotate(1turn);
//   }
// `;

// const blink = keyframes`
//   40% {
//     opacity: 0.5;
//   }
//   80% {
//     opacity: 1;
//   }
// `;


// const RotatedBox = styled.div`
//   position: relative;
//   width: 200px;
//   height: 200px;
//   overflow: hidden;

//   &::after {
//     content: "";
//     position: absolute;
//     top: 6px;
//     left: 6px;
//     right: 6px;
//     bottom: 6px;
//     background: #fff;
//   }
// `;


// const RotatedBoxDemo = styled.div`
//   position: relative;
//   width: 200px;
//   height: 200px;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     left: -50%;
//     top: -50%;
//     width: 200%;
//     height: 200%;
//     background-repeat: no-repeat;
//     background-size: 50% 50%;
//     background-position: 0 0, 100% 0, 100% 100%, 0 100%;
//     background-color: #da99ff;
//   } // ?

//     /* export default gradients;
//         animation: ${rotate} 3s linear infinite;
//     } */

//   &::after {
//     content: "";
//     position: absolute;
//     top: 6px;
//     left: 6px;
//     right: 6px;
//     bottom: 6px;
//     background: #fff;
//     animation: ${blink} 5s linear infinite;
//   } // ?

// const MyComponent = () => {
//   return (
//     <div>
//       <RotatedBox className="rotated_box" />
//       <RotatedBoxDemo className="rotated_box_demo" />
//     </div>
//   );
// };

// export default MyComponent;
