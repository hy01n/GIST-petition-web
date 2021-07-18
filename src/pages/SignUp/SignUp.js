// import React from 'react';
// import "pages/SignUp/SignUp.css";

// const SignUp = () => {
//     return <div>SignUp Page</div>;
// }

// export default SignUp;
import React from "react";
import "./SignUp.css";
import InputPair from "components/molecules/InputPair/InputPair";
import SubmitButton from "components/atoms/SubmitButton/SubmitButton";
import InternalLink from "components/atoms/InternalLink/InternalLink";
import LoginInput from "components/atoms/LoginInput/LoginInput";
import TitleBlock from "components/molecules/TitleBlock/TitleBlock";
import InputButtonPair from "components/molecules/InputButtonPair/InputButtonPair";

const SignUp = () => {
  return (
    <div>
      <TitleBlock text1="지스트 청원 사이트" text2="계정 만들기" />
      <InputPair
        type1="text"
        placeholder1="이름"
        type2="text"
        placeholder2="입학년도"
      />
      <div>
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
      </div>
      <InputButtonPair type="text" placeholder="ID" text="중복확인" />
      <LoginInput type="text" text="Email" />
      <InputPair
        type1="password"
        placeholder1="Password"
        type2="password"
        placeholder2="Password check"
      />
      <LoginInput type="checkbox" text="" />
      지스트 청원 사이트
      <InternalLink text="가입약관" />에 동의합니다.
      <LoginInput type="text" />
      <SubmitButton text="가입하기" />
    </div>
  );
};

export default SignUp;
