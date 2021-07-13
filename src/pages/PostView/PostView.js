import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Subject from 'components/atoms/Subject/Subject';
import LoadingText from 'components/atoms/LoadingText/LoadingText';
import InputText from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Pagination from 'components/molecules/Pagination/Pagination';

const PostView = ({ history, match }) => {
  const { id } = match.params;

  // 청원 글 내용 관련 states
  const [postDetail, setPostDetail] = useState({});

  // 댓글 관련 states
  const [commentValue, setCommentValue] = useState('동의합니다.');
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const getData = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    setPostDetail({
      title: res.data.title,
      content: res.data.body,
      count: 36,
    });
  };

  const getComment = async () => {
    setLoading(true);
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    const commentInfos = res.data.map((data) => ({
      id: data.id,
      content: data.title,
    }));

    setComments(commentInfos);
    setLoading(false);
  };

  const handleWriteComment = async () => {
    // 댓글 등록
    window.location.reload();
  };

  useEffect(() => {
    getData();
  }, []);
  const currentPosts = useCallback(
    (postlist) => {
      const indexOfLast = currentPage * postsPerPage;
      const indexOfFirst = indexOfLast - postsPerPage;
      return postlist.slice(indexOfFirst, indexOfLast);
    },
    [currentPage],
  );
  return (
    <PostViewWrapper>
      {postDetail ? (
        <>
          <PostViewRow>
            <PostViewTitle>{postDetail.title}</PostViewTitle>
          </PostViewRow>
          <PostViewRow>
            <CountText>
              총 <Count>{postDetail.count}</Count>명이 동의하였습니다.
            </CountText>
          </PostViewRow>

          <PostViewRow>
            <Subject text="청원 내용" />
            <PostViewContent>{postDetail.content}</PostViewContent>
          </PostViewRow>
        </>
      ) : (
        '해당 게시글을 찾을 수 없습니다.'
      )}
      <GoListButton onClick={() => history.goBack()}>목록</GoListButton>
      <CommentInputWrapper>
        <InputText value={commentValue} onChangeValue={setCommentValue} />

        <Button ButtonText="동의" onClickButton={() => handleWriteComment()} />
      </CommentInputWrapper>
      {loading ? (
        <LoadingText text="Loading..." />
      ) : !comments ? (
        <ApproveCommentButton onClick={() => getComment()}>
          동의 내용 보기
        </ApproveCommentButton>
      ) : (
        <CommentWrapper>
          {currentPosts(comments).map((comment) => (
            <CommentInfo>
              <CommentUserId>{comment.id}</CommentUserId>
              <CommentContent>{comment.content}</CommentContent>
            </CommentInfo>
          ))}
          <Pagination
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={comments.length}
            setCurrentPage={setCurrentPage}
          />
        </CommentWrapper>
      )}
    </PostViewWrapper>
  );
};

const PostViewWrapper = styled.div``;
const PostViewRow = styled.div``;
const PostViewTitle = styled.h2``;

const PostViewContent = styled.div``;

const CountText = styled.span``;
const Count = styled.span``;

const GoListButton = styled.button``;

const ApproveCommentButton = styled.button`
  color: white;
  background-color: #02387b;
  width: 50%;
  height: 30px;
`;

const CommentWrapper = styled.div``;
const CommentInfo = styled.div``;
const CommentUserId = styled.span``;
const CommentContent = styled.span``;
const CommentInputWrapper = styled.div``;

export default PostView;
