import React from 'react';
import InputText from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Card from 'components/atoms/Card';
import Title from 'components/atoms/Title';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.scss';

const SignUp = () => {
  const props = {
    ButtonText: '가입하기',
    backgroundColor: '#ff7878',
    color: '#fff',
    borderRadius: '5px',
    size: 'large',
    type: 'submit',
  };
  const center = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <Card>
      <div style={center}>
        <Title text="지스트 청원 사이트" />
        <h5>계정 만들기</h5>
      </div>
      <InputText type="text" placeholder="이름" kinds="info-input" />
      <InputText type="password" placeholder="입학년도" kinds="info-input" />
      {/* <div className = "selectBox">
        <select name="" id="track">
          <option value="">대학생</option>
          <option value="">대학원생</option>
        </select>
        <select name="" id="major">
          <option value="">기초교육학부</option>
          <option value="">기계공학</option>
          <option value="">물리학</option>
          <option value="">생명과학</option>
          <option value="">신소재공학</option>
          <option value="">전전컴</option>
          <option value="">화학</option>
          <option value="">환경공학</option>
        </select>
      </div> */}
      {/* <InputButtonPair type="text" placeholder="ID" text="중복확인" /> */}
      {/* <LoginInput type="text" placeholder="ID"/>
      <LoginInput type="text" placeholder="Email" /> */}
      <InputText type="text" placeholder="ID" kinds="info-input" />
      <InputText type="text" placeholder="Email" kinds="info-input" />
      <InputText type="password" placeholder="Password" kinds="info-input" />
      <InputText
        type="password"
        placeholder="Password check"
        kinds="info-input"
      />
      {/* <LoginInput type="checkbox" text="" />
      지스트 청원 사이트
      <InternalLink text="가입약관" />에 동의합니다. */}
      {/* <LoginInput type="text" /> */}
      <Button {...props} />
      <Link className={styles['link']} style={center} to="login">
        로그인하러 가기
      </Link>
    </Card>
  );
};

export default SignUp;
