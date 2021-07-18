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
              총 <Count>{postDetail.count}</Count>명이 동의하였습니다
            </CountText>
          </PostViewRow>

          <PostViewRow>
            <Subject primary text="청원 내용" />
            <PostViewContent>{postDetail.content}</PostViewContent>
          </PostViewRow>
        </>
      ) : (
        '해당 게시글을 찾을 수 없습니다.'
      )}

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
      <GoListButton onClick={() => history.push('/petitions')}>
        목록
      </GoListButton>
    </PostViewWrapper>
  );
};

const PostViewWrapper = styled.div`
  width:900px;
  margin: 30px auto;
  padding: 50px;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;
const PostViewRow = styled.div``;
const PostViewTitle = styled.h2`
  text-align: center;
  margin: 0 0 45px;
`;
const PostViewContent = styled.div`
  margin: 0 0 50px;
`;
const CountText = styled.span`
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 40px;
`;

const Count = styled.span`
  color: #df3127;
`;

const GoListButton = styled.button``;

const ApproveCommentButton = styled.button`
  display: block;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  border: 2px solid #dedede;
  background-color: #f3f3f3;
  padding: 15px 30px;
  width: 100%;

  &:hover {
    background-color: #df3127;
    color: white;
  }
`;

const CommentWrapper = styled.div`

`;

const CommentInfo = styled.div`
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  padding: 15px 0`;
const CommentUserId = styled.h4`
  margin: 0`;
const CommentContent = styled.span``;

const CommentInputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 0 40px;
`;

export default PostView;
