import React, { useState } from 'react';
import InputText from 'components/atoms/Input';

import Button from 'components/atoms/Button';
import styled from 'styled-components';

const CommentInput = () => {
  const acceptBtnProps = {
    ButtonText: '동의',
    width: '120px',
    height: '60px',
    size: 'large',
  };
  const handleWriteComment = async () => {
    // 댓글 등록
    window.location.reload();
  };
  const [commentValue, setCommentValue] = useState('동의합니다.');

  return (
    <StyledCommentInput>
      <InputText
        value={commentValue}
        onChangeValue={setCommentValue}
        kinds="normal-input"
      />

      <Button onClickButton={() => handleWriteComment()} {...acceptBtnProps} />
    </StyledCommentInput>
  );
};

const StyledCommentInput = styled.div`
  display: flex;
`;

export default CommentInput;
