import React from 'react';
import InputText from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Card from 'components/atoms/Card';
import Title from 'components/atoms/Title';
import styles from './ForgetPWD.module.scss';
import { Link } from 'react-router-dom';

const ForgetPWD = () => {
  const props = {
    ButtonText: '새로운 비밀번호 보내기',
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
    <section className={styles['wrap']}>
      <Card>
        <div style={center}>
          <Title text="비밀번호를 잊으셨나요?" />
          <h5>가입시 등록한 아이디와 이메일주소를 입력해 주세요.</h5>
        </div>
        <InputText
          type="text"
          placeholder="ID"
          kinds="info-input"
          isRequired="1"
        />
        <InputText
          type="text"
          placeholder="Email"
          kinds="info-input"
          isRequired="1"
        />

        <Button {...props} />
        <Link className={styles['link']} style={center} to="login">
          로그인하러 가기
        </Link>
      </Card>
    </section>
  );
};

export default ForgetPWD;
