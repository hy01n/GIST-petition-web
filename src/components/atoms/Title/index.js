import React from 'react';
import styled from 'styled-components';

const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

const StyledTitle = styled.h3`
  display: flex;
  justify-content: center;
`;

export default Title;
