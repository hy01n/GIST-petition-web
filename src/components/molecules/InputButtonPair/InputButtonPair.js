import React from 'react';
import RequiredInput from 'components/atoms/RequiredInput/RequiredInput';
import Button from 'components/atoms/Button/index';
import './InputButtonPair.css';
const InputButtonPair = ({ type, placeholder, text }) => {
  return (
    <div className="InputButtonPair">
      <RequiredInput type={type} placeholder={placeholder} />
      <Button ButtonText={text} />
    </div>
  );
};

export default InputButtonPair;
