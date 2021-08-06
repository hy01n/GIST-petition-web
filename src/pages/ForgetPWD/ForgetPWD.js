import React from 'react';
import styled from 'styled-components';
import './ForgetPWD.css';
import RequiredInput from 'components/atoms/RequiredInput/RequiredInput';
import Button from 'components/atoms/Button/index';
import InternalLink from 'components/atoms/InternalLink/InternalLink';
import TitleBlock from 'components/molecules/TitleBlock/TitleBlock';

const ForgetPWD = () => {
  const props = {
    ButtonText: '새로운 비밀번호 보내기',
    backgroundColor: '#ff7878',
    color: '#fff',
    borderRadius: '5px',
    size: 'large',
    type: 'submit',
  };
  return (
    <Container>
      <TitleBlock
        text1="비밀번호를 잊으셨나요?"
        text2="가입시 등록한 아이디와 이메일주소를 입력해 주세요."
      />
      <RequiredInput type="text" placeholder="Username" />
      <RequiredInput type="text" placeholder="Email" />
      <Button {...props} />
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
