// import React from "react";
// import "pages/Login/Login.css";

// const Login = () => {
//   return <div>Login Page</div>;
// };

// export default Login;
// import React from 'react';
import React from 'react';
import './Login.css';
import InputPair from 'components/molecules/InputPair/InputPair';
import SubmitButton from 'components/atoms/SubmitButton/SubmitButton';
import InternalLink from 'components/atoms/InternalLink/InternalLink';
import TitleBlock from 'components/molecules/TitleBlock/TitleBlock';

const Login = () => {
  return (
    <div>
      <TitleBlock text1="지스트 청원 사이트" text2="Login" />
      <InputPair
        type1="text"
        placeholder1="Username"
        type2="password"
        placeholder2="Password"
      />
      <SubmitButton text="로그인" />
      <InternalLink text="아이디" />
      /
      <InternalLink text="비밀번호를 잊으셨나요?" />
    </div>
  );
};

export default Login;