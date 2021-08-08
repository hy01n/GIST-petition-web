import React from 'react';
import InputText from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';
import Card from 'components/atoms/Card';
import { Link } from 'react-router-dom';
import styles from './ForgetID.module.scss';

const ForgetID = () => {
  const props = {
    ButtonText: '아이디 찾기',
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
        <Title text="아이디를 잊으셨나요?" />
        <h5>가입시 등록한 이메일주소를 입력해 주세요.</h5>
      </div>
      <InputText
        type="text"
        placeholder="Email"
        isRequired="1"
        kinds="info-input"
      />
      <Button {...props} />
      <Link className={styles['link']} style={center} to="forgetpwd">
        비밀번호 찾기
      </Link>
      <Link className={styles['link']} style={center} to="login">
        로그인하러 가기
      </Link>
    </Card>
  );
};

export default ForgetID;
