import React from 'react';
import styles from './index.module.scss';
import styled from 'styled-components';

const InputText = ({ ...props }) => {
  const onChangeValue = props.titleInput
    ? props.onChange
    : (e) => props.onChangeValue(e.target.value);
  return (
    <StyledInputText
      required={props.isRequired && true}
      placeholder={props.placeholder}
      value={props.value}
      onChange={onChangeValue}
      className={styles[props.kinds]}
      type={props.type}
    />
  );
};
const StyledInputText = styled.input`
  &:focus {
    outline: none;
  }
`;
export default InputText;
