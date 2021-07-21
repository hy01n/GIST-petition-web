import React from 'react';
import styled from 'styled-components';

const DropDownButton = ({ text }) => {
  return <Button>{text}</Button>;
};

const Button = styled.button`
  width: 100%;
  &:hover {
    background-color: #3e8e41;
  }
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export default DropDownButton;
