import React from 'react';
import styled from 'styled-components';

const Button = ({ ButtonText, onClickButton }) => {
  return <StyledButton onClick={onClickButton}>{ButtonText}</StyledButton>;
};

const StyledButton = styled.button`
  color: white;
  background-color: #02387b;
`;

export default Button;
