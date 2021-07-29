import React from 'react';
import styled from 'styled-components';

const Button = ({ ButtonText, onClickButton }) => {
  return <StyledButton onClick={onClickButton}>{ButtonText}</StyledButton>;
};

const StyledButton = styled.button`
  width: 120px;
  color: white;
  background-color: #df3127;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export default Button;
