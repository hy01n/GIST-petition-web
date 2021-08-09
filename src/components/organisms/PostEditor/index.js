import React from 'react';
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
  return (
    <EditorWrapper>
      <Title size="h3" text="제목"></Title>
      <InputText
        type="text"
        placeholder="청원 제목을 입력해주세요."
        value={postInfo.title}
        // post Test를 한 뒤엔 useRef & 컴포넌트간 통신을 이용해서 구현하기
        titleInput="1"
        onChange={(e) => setPostInfo({ ...postInfo, title: e.target.value })}
        kinds="normal-input"
      />
      <Title size="h3" text="카테고리"></Title>
      <select defaultValue="분류1" onChange={handleOption}>
        <option selected disabled>
          카테고리를 선택해주세요.
        </option>
        <option value="분류1">분류1</option>
        <option value="분류2">분류2</option>
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
