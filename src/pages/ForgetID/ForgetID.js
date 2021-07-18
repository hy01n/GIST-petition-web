import React from "react";
import "./ForgetID.css";
import RequiredInput from 'components/atoms/RequiredInput/RequiredInput';
import SubmitButton from 'components/atoms/SubmitButton/SubmitButton';
import InternalLink from 'components/atoms/InternalLink/InternalLink';
import TitleBlock from "components/molecules/TitleBlock/TitleBlock";

const ForgetID = () => {
  return (
    <div>
        <TitleBlock text1 = "아이디를 잊으셨나요?" text2 = "가입시 등록한 이메일주소를 입력해 주세요." />
        <RequiredInput type = "text" placeholder = "Email" />
        <SubmitButton text = "아이디 찾기" />
        <InternalLink text = "비밀번호 찾기" href = "forgetpwd"/>
        <InternalLink text = "로그인하러 가기"  href = "login"/>
    </div>
  );
};

export default ForgetID;
