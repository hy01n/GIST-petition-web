import axios from 'axios';
import React, { useState } from 'react';
import InputText from 'components/atoms/Input';

import Button from 'components/atoms/Button';
import styled from 'styled-components';

const CommentInput = ({ id }) => {
  const [commentValue, setCommentValue] = useState('동의합니다.');

  const acceptBtnProps = {
    ButtonText: '동의',
    width: '120px',
    height: '60px',
    size: 'large',
  };
  const postUrl = `https://gist-competition-cn-server-zvxvr4r3aa-du.a.run.app/gistps/api/v1/post/${id}/comment`;

  console.log(postUrl);
  const reqBody = {
    postId: Number(id),
    content: commentValue,
  };
  console.log(reqBody);
  const handleWriteComment = () => {
    axios({
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      url: postUrl,
      data: reqBody,
    })
      .then(function (res) {
        console.log(res);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
  @media all and (max-width: 685px) {
    height: 45px;
  }
`;

export default CommentInput;
