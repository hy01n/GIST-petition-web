import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';
import Editor from 'components/molecules/Editor';
import './index.module.scss';
import InputText from 'components/atoms/Input';

const PostEditor = ({ setShowConfirmModal, postInfo, setPostInfo }) => {
  const handleOption = (e) => {
    setPostInfo({ ...postInfo, category: e.target.value });
  };

  const onEditorChange = (e) => {
    setPostInfo({ ...postInfo, description: e });
  };

  const history = useHistory();

  const goBack = (path) => {
    history.push(path);
  };

  const [titleLong, setTitleLong] = useState(false);

  const titleLength = (value) => {
    if (value > 10) {
      setTitleLong(true);
    } else {
      setTitleLong(false);
    }
  };

  return (
    <EditorWrapper>
      <Title size="h3" text="제목"></Title>
      <InputText
        type="text"
        placeholder="청원 제목을 입력해주세요. (10자 이상)"
        value={postInfo.title}
        // post Test를 한 뒤엔 useRef & 컴포넌트간 통신을 이용해서 구현하기
        titleInput="1"
        onChange={(e) => {
          setPostInfo({ ...postInfo, title: e.target.value });
          titleLength(e.target.value.length);
        }}
        kinds="normal-input"
      />
      <Title size="h3" text="카테고리"></Title>
      <select defaultValue="기숙사(대학/대학원)" onChange={handleOption}>
        <option selected disabled>
          카테고리를 선택해주세요.
        </option>
        <option value="기숙사">기숙사</option>
        <option value="시설운영">시설운영</option>
        <option value="진로/취업">진로/취업</option>
        <option value="학적/교과/장학">학적/교과/장학</option>
        <option value="학생지원/행사/동아리">학생지원/행사/동아리</option>
        <option value="기획/예산/홍보">기획/예산/홍보</option>
        <option value="대외협력">대외협력</option>
        <option value="권익소통">권익소통</option>
      </select>
      <Title size="h3" text="청원내용"></Title>

      <Editor placeholder="내용을 작성해주세요." onChange={onEditorChange} />

      <ButtonWrapper>
        <Button
          width="40%"
          type="button"
          onClick={() => goBack('./')}
          ButtonText={'작성 취소'}
        ></Button>
        <Button
          width="40%"
          type="button"
          backgroundColor="#5a5e5d"
          onClick={() =>
            !titleLong
              ? alert('제목 길이가 너무 짧습니다')
              : setShowConfirmModal(true)
          }
          ButtonText={'작성 완료'}
        ></Button>
      </ButtonWrapper>
    </EditorWrapper>
  );
};

const EditorWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

// const InputContent = styled.input`
//   width: 100%;
//   height: 300px;
//   line-height: 10px;
// `;

export default PostEditor;
