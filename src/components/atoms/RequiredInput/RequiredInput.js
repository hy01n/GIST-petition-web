import React from "react";

const RequiredInput = ({ type, placeholder }) => {
  return <input required type={type} placeholder={placeholder} />;
};

export default RequiredInput;
