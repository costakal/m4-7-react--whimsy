import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return (
    <Wrapper style={{ width: size, height: size, color: color }}></Wrapper>
  );
};

export default PoppingCircle;

const turnBlue = keyframes`
  from {
    background-color: inherit;
  }
  to {
    background-color: #E790F7;
  }
`;

const scaleUp = keyframes`
from {
    transform: scale(0, 0)
}
to {
    transform: scale(1, 1)
}
`;

const fadeOut = keyframes`
from {
    opacity: 1;
}
to {
    opacity: 0;
}
`;

const Wrapper = styled.div`
  border-radius: 50%;
  animation: ${turnBlue} ease-in 500ms forwards,
    ${scaleUp} ease-in 300ms forwards, ${fadeOut} ease-in 500ms forwards;
`;
