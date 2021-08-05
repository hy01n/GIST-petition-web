import React from 'react';
import RequiredInput from 'components/atoms/RequiredInput/RequiredInput';
import SubmitButton from 'components/atoms/SubmitButton/SubmitButton';
import './InputButtonPair.css';
const InputButtonPair = ({ type, placeholder, text }) => {
  return (
    <div className="InputButtonPair">
      <RequiredInput type={type} placeholder={placeholder} />
      <SubmitButton text={text} />
    </div>
  );
};

export default InputButtonPair;
