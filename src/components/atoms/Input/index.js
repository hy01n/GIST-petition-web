import React from 'react';
import styles from './index.module.scss';
import styled from 'styled-components';

const InputText = ({ ...props }) => {
  const isRequired = props.isRequired;
  const onChangeValue = props.onChangeValue
    ? (e) => props.onChangeValue(e.target.value)
    : false;

  const kinds = props.kinds;

  return (
    <StyledInputText
      required={isRequired && true}
      value={props.value}
      onChange={onChangeValue}
      className={styles[kinds]}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

const StyledInputText = styled.input`
  &:focus {
    outline: none;
  }
`;

export default InputText;
