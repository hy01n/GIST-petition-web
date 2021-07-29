import React from 'react';
import styled from 'styled-components';

const InputText = ({ value, onChangeValue }) => {
  return (
    <StyledInputText
      value={value}
      onChange={(e) => onChangeValue(e.target.value)}
    />
  );
};
const StyledInputText = styled.input`
  width: 560px;
`;

export default InputText;
