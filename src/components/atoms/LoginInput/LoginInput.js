import React from 'react';
import './LoginInput.css';
const LoginInput = ({ type, placeholder }) => {
  return <input className="LoginInput" type={type} placeholder={placeholder} />;
};
export default LoginInput;
