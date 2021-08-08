import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Subject from 'components/atoms/Subject';
import Text from 'components/atoms/Text';
import InputText from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Card from 'components/atoms/Card';
import Pagination from 'components/molecules/Pagination/Pagination';
import Title from 'components/atoms/Title';

const PostView = ({ history, match }) => {
  const { id } = match.params;
  const acceptBtnProps = {
    ButtonText: '동의',
    width: '120px',
    height: '60px',
    size: 'large',
  };
  const indexBtnProps = {
    ButtonText: '목록',
    borderColor: '2px solid #dedede',
    backgroundColor: '#f3f3f3',
    color: '#333',
    width: '120px',
    size: 'large',
  };
  const approveCommentBtnProps = {
    kinds: 'acpt-comment',
    ButtonText: '동의 내용 보기',
    color: '#333',
    borderColor: '2px solid #dedede',
    backgroundColor: '#f3f3f3',
    size: 'large',
  };

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
      `https://gist-competition-cn-server-zvxvr4r3aa-du.a.run.app/gistps/api/v1/post/${id}`,
    );

    setPostDetail({
      title: res.data.title,
      content: res.data.description,
      count: res.data.accepted,
    });
  };

  const getComment = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://gist-competition-cn-server-zvxvr4r3aa-du.a.run.app/gistps/api/v1/post/${id}`,
    );

    const commentInfos = res.data.comment.map((comment) => ({
      id: comment.commentId,
      content: comment.content,
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
    <Card maxWidth="1100px">
      {postDetail ? (
        <>
          <PostViewRow>
            <Title text={postDetail.title} />
          </PostViewRow>
          <PostViewRow>
            <CountText>
              총 <Count>{postDetail.count}</Count>명이 동의하였습니다
            </CountText>
          </PostViewRow>

          <PostViewRow>
            <Subject page="postview" text="청원 내용" />
            <PostViewContent>{postDetail.content}</PostViewContent>
          </PostViewRow>
        </>
      ) : (
        '해당 게시글을 찾을 수 없습니다.'
      )}

      <CommentInputWrapper>
        <InputText
          value={commentValue}
          onChangeValue={setCommentValue}
          kinds="normal-input"
        />

        <Button
          onClickButton={() => handleWriteComment()}
          {...acceptBtnProps}
        />
      </CommentInputWrapper>
      {loading ? (
        <Text text="Loading..." />
      ) : !comments ? (
        <Button
          onClick={() => getComment()}
          {...approveCommentBtnProps}
        ></Button>
      ) : (
        <CommentWrapper>
          {currentPosts(comments).map((comment) => (
            <CommentInfo key={true}>
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
      <Button
        onClick={() => history.push('/petitions')}
        {...indexBtnProps}
      ></Button>
    </Card>
  );
};

const PostViewRow = styled.div``;
// const PostViewTitle = styled.h2`
//   text-align: center;
//   margin: 0 0 45px;
// `;
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

const CommentWrapper = styled.div``;

const CommentInfo = styled.div`
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  padding: 15px 0;
`;
const CommentUserId = styled.h4`
  margin: 0;
`;
const CommentContent = styled.span``;

const CommentInputWrapper = styled.div`
  display: flex;
`;

export default PostView;
