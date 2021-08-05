import React from 'react';
import styled from 'styled-components';
import './Login.css';
import InputPair from 'components/molecules/InputPair/InputPair';
import SubmitButton from 'components/atoms/SubmitButton/SubmitButton';
import InternalLink from 'components/atoms/InternalLink/InternalLink';
import TitleBlock from 'components/molecules/TitleBlock/TitleBlock';

const Login = () => {
  return (
    <Container>
      <TitleBlock text1="지스트 청원 사이트" text2="Login" />
      <InputPair
        type1="text"
        placeholder1="Username"
        type2="password"
        placeholder2="Password"
      />
      <SubmitButton text="로그인" />
      <InternalLink text="회원가입" href="/signup" />
      <div className="forgetIdPwd">
        <InternalLink text="아이디/" href="forgetid" />
        <InternalLink text="비밀번호를 잊으셨나요?" href="forgetpwd" />
      </div>
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 30%;
`;

export default Login;
