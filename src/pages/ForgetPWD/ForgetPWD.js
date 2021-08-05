import React from 'react';
import styled from 'styled-components';
import './ForgetPWD.css';
import RequiredInput from 'components/atoms/RequiredInput/RequiredInput';
import SubmitButton from 'components/atoms/SubmitButton/SubmitButton';
import InternalLink from 'components/atoms/InternalLink/InternalLink';
import TitleBlock from 'components/molecules/TitleBlock/TitleBlock';

const ForgetPWD = () => {
  return (
    <Container>
      <TitleBlock
        text1="비밀번호를 잊으셨나요?"
        text2="가입시 등록한 아이디와 이메일주소를 입력해 주세요."
      />
      <RequiredInput type="text" placeholder="Username" />
      <RequiredInput type="text" placeholder="Email" />
      <SubmitButton text="새로운 비밀번호 보내기" />
      <InternalLink text="로그인하러 가기" href="login" />
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
export default ForgetPWD;
