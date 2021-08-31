import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Title from 'components/atoms/Title';
import Boundary from 'components/atoms/Boundary';
import styled from 'styled-components';

const Contents = ({ ...props }) => {
  const id = props.id;

  // 청원 글 내용 관련 states
  const [postDetail, setPostDetail] = useState({});

  // 댓글 관련 states
  const getData = async () => {
    const res = await axios.get(
      `https://gist-competition-cn-server-zvxvr4r3aa-du.a.run.app/gistps/api/v1/post/${id}`,
    );

    setPostDetail({
      title: res.data.title,
      content: res.data.description,
      count: res.data.accepted,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {postDetail ? (
        <>
          <Title size="h1" align="center" text={postDetail.title}></Title>

          <StyledDiv>
            <Title
              size="h4"
              text={postDetail.count}
              color="#df3127"
              fontSize="20px"
            ></Title>
            <Title size="h4" text="명이 동의하였습니다" fontSize="20px"></Title>
          </StyledDiv>
          <Title size="h3" text="청원 내용" />
          <Boundary />
          <PostViewContent>{postDetail.content}</PostViewContent>
        </>
      ) : (
        '해당 게시글을 찾을 수 없습니다.'
      )}
    </>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const PostViewContent = styled.div`
  margin: 0 0 50px;
  @media all and (max-width: 505px) {
    font-size: 14px;
  }
`;
export default Contents;
