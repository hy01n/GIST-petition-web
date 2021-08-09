import React from 'react';
import InputText from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Card from 'components/atoms/Card';
import { Link } from 'react-router-dom';
import Title from 'components/atoms/Title';
import styles from './Login.module.scss';

const Login = () => {
  const props = {
    ButtonText: '로그인',
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
        <h5>Login</h5>
      </div>
      <InputText type="text" placeholder="ID" kinds="info-input" />
      <InputText type="password" placeholder="Password" kinds="info-input" />
      <Button text="로그인" {...props} />
      <Link className={styles['link']} style={center} to="/signup">
        회원가입
      </Link>
      <div className={styles['forgetIdPwd']}>
        <Link className={styles['link']} to="forgetid">
          아이디
        </Link>
        <span>/</span>
        <Link className={styles['link']} to="forgetpwd">
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </Card>
  );
};

export default Login;
