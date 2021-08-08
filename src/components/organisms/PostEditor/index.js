import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Subject from 'components/atoms/Subject';
import Editor from 'components/molecules/Editor';
import './index.module.scss';
import InputText from 'components/atoms/Input';
const PostEditor = ({ setShowConfirmModal }) => {
  const [postInfo, setPostInfo] = useState({
    title: '',
    category: '',
    content: '',
  });

  const handleOption = (e) => {
    setPostInfo({ ...postInfo, category: e.target.value });
  };

  const [desc, setDesc] = useState('');
  const onEditorChange = (value) => {
    setDesc(value);
  };

  const history = useHistory();

  const goBack = (path) => {
    history.push(path);
  };

  return (
    <EditorWrapper>
      <Subject text="제목"></Subject>
      <InputText
        type="text"
        placehorder="청원 제목을 입력해주세요."
        value={postInfo.title}
        onChange={(e) => setPostInfo({ ...postInfo, title: e.target.value })}
        kinds="normal-input"
      />
      <Subject text="카테고리"></Subject>
      <select>
        <option selected disabled onChange={handleOption}>
          카테고리를 선택해주세요.
        </option>
        <option value="분류1">분류1</option>
        <option value="분류2">분류2</option>
      </select>
      <Subject text="청원내용"></Subject>

      {/* <InputContent
        type="text"
        value={postInfo.content}
        onChange={(e) => setPostInfo({ ...postInfo, content: e.target.value })}
      /> */}

      <Editor value={desc} onChange={onEditorChange} />

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
          onClick={() => setShowConfirmModal(true)}
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
