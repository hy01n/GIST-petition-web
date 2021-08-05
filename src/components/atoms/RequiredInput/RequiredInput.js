import React from 'react';
import './RequiredInput.css';
const RequiredInput = ({ type, placeholder }) => {
  return (
    <input
      className="RequiredInput"
      required
      type={type}
      placeholder={placeholder}
    />
  );
};

export default RequiredInput;
