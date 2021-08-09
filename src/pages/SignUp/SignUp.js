import axios from 'axios'
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import InputText from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Card from 'components/atoms/Card';
import Title from 'components/atoms/Title';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.scss';
// const userIdInput = document.querySelector("input[placeholder=ID]");
// const userPasswordInput = document.querySelector("input[placeholder=Password]");
// const usernameInput = document.querySelector("input[placeholder=이름]");
// const userEmailInput = document.querySelector("input[placeholder=Email]");
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
  const [idValue, setIdValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const history = useHistory();
  const handleSubmit = () => {
    // event.preventDefault();
    // const userId = userIdInput.value;
    // const userPassword = userPasswordInput.value;
    // const username = usernameInput.value;
    // const email = userEmailInput.value;
    axios
      .post(`https://gist-competition-cn-server-zvxvr4r3aa-du.a.run.app/gistps/api/v1/user`, {
        userId:idValue,
        userPassword:passwordValue,
        username:nameValue,
        email:emailValue
      })
      .then((res) => {
        alert(`${res.status}: 회원가입 성공`);
        history.push('/login'); // eslint-disable-line no-alert
      })
      .catch((error) => {
        alert(`${error}: 오류발생`); // eslint-disable-line no-alert
      });
  };


  return (
    <Card>
      <div style={center}>
        <Title text="지스트 청원 사이트" />
        <h5>계정 만들기</h5>
      </div>
      <InputText type="text" placeholder="이름" kinds="info-input" name="username" value={nameValue} onChangeValue={setNameValue}/>
        {/* <InputText type="password" placeholder="입학년도" kinds="info-input" /> */}
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
      <InputText type="text" placeholder="ID" kinds="info-input" name="userId" value={idValue}
        onChangeValue={setIdValue}/>
      <InputText type="text" placeholder="Email" kinds="info-input" name="email" value={emailValue}
        onChangeValue={setEmailValue}/>
      <InputText type="password" placeholder="Password" kinds="info-input" name="password" value={passwordValue}
        onChangeValue={setPasswordValue}/>
        {/* <InputText
          type="password"
          placeholder="Password check"
          kinds="info-input"
        /> */}
        {/* <LoginInput type="checkbox" text="" />
        지스트 청원 사이트
        <InternalLink text="가입약관" />에 동의합니다. */}
        {/* <LoginInput type="text" /> */}
      <Button {...props} onClickButton={() => handleSubmit()} type="submit" />
      <Link className={styles['link']} style={center} to="login">
        로그인하러 가기
      </Link>
    </Card>
  );
};

export default SignUp;
