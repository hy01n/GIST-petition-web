import React from "react";
import RequiredInput from "components/atoms/RequiredInput/RequiredInput";
import SubmitButton from "components/atoms/SubmitButton/SubmitButton";

const InputButtonPair = ({
  type,
  placeholder,
  text,
}) => {
  return(
    <div>
      <RequiredInput type={type} placeholder={placeholder} />
      <SubmitButton text={text} />
    </div>);
};

export default InputButtonPair;
