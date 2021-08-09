import axios from 'axios'
import React from 'react';
import InputText from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Card from 'components/atoms/Card';
import { Link } from 'react-router-dom';
import Title from 'components/atoms/Title';
import styles from './Login.module.scss';
const userIdInput = document.querySelector("input[placeholder=아이디]");
const userPasswordInput = document.querySelector("input[placeholder=비밀번호]");
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdInput.value;
    const userPassword = userPasswordInput.value;
    console.log(userId,userPassword)
    axios
      .post(`https://gist-competition-cn-server-zvxvr4r3aa-du.a.run.app/gistps/api/v1/user`, {
        userId,
        userPassword,
      })
      .then((res) => {
        alert(`${res.status}: 로그인 성공`); // eslint-disable-line no-alert
      })
      .catch((error) => {
        alert(`${error}: 오류발생`); // eslint-disable-line no-alert
      });
  };

  return (
    <Card>
      <div style={center}>
        <Title text="지스트 청원 사이트" />
        <h5>Login</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <InputText type="text" placeholder="아이디" kinds="info-input" name="userId"/>
        <InputText type="password" placeholder="비밀번호" kinds="info-input" name="userPassword"/>
        <Button text="로그인" type="submit" {...props} />
      </form>
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
