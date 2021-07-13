import React, { useState } from 'react';
import styled from 'styled-components';
import Precuation from 'components/hardcording/Precaution/Precaution';

const Step = ({ history }) => {
  const [postInfo, setPostInfo] = useState({
    title: '',
    category: '',
    content: '',
  });
  const handleComplete = () => {
    // const res = axios.post('');
    // 작성된 글 페이지로 이동
    // history.push(`/petitions/${res.data.id}`);
    history.push('/petitions/1');
  };
  const handleOption = (e) => {
    setPostInfo({ ...postInfo, category: e.target.value });
  };
  return (
    <Container>
      <PrecautionWrapper>
        <Precuation />
      </PrecautionWrapper>
      <EditorWrapper>
        <span>제목</span>
        <InputTitle
          type="text"
          placehorder="청원 제목을 입력해주세요."
          value={postInfo.title}
          onChange={(e) => setPostInfo({ ...postInfo, title: e.target.value })}
        />
        <span>카테고리</span>
        <select>
          <option selected disabled onChange={handleOption}>
            카테고리를 선택해주세요.
          </option>
          <option value="분류1">분류1</option>
          <option value="분류2">분류2</option>
        </select>
        <span>청원내용</span>
        <InputContent
          type="text"
          value={postInfo.content}
          onChange={(e) =>
            setPostInfo({ ...postInfo, content: e.target.value })
          }
        />
        <ButtonWrapper>
          <button type="button" onClick={handleComplete}>
            작성 완료
          </button>
          <button
            type="button"
            onClick={() => {
              history.push('/');
            }}
          >
            작성 취소
          </button>
        </ButtonWrapper>
      </EditorWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 800px;
`;
const PrecautionWrapper = styled.div`
  margin: 0;
  align-items: center;
`;
const EditorWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ButtonWrapper = styled.div``;
const InputTitle = styled.input`
  width: 100%;
  height: 45px;
  line-height: 100%;
`;
const InputContent = styled.input`
  width: 100%;
  height: 300px;
  line-height: 10px;
`;
export default Step;
