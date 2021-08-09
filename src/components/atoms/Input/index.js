import React from 'react';
import styles from './index.module.scss';
import styled from 'styled-components';

const InputText = ({ ...props }) => {
  const isRequired = props.isRequired;
  const kinds = props.kinds;

  const onChangeValue = props.titleInput
    ? props.onChange
    : (e) => props.onChangeValue(e.target.value);

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
