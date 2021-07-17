import React from 'react';
import LoginInput from 'components/atoms/LoginInput/LoginInput';

const InputPair = ({ type1, type2, placeholder1, placeholder2 }) => {
  return (
    <div>
      <LoginInput type={type1} placeholder={placeholder1} />
      <LoginInput type={type2} placeholder={placeholder2} />
    </div>
  );
};

export default InputPair;
