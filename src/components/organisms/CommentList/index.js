import axios from 'axios';
import React, { useState, useCallback } from 'react';
import Pagination from 'components/molecules/Pagination';
import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';
import styled from 'styled-components';

const CommentList = ({ ...props }) => {
  const id = props.id;
  const approveCommentBtnProps = {
    kinds: 'acpt-comment',
    ButtonText: '동의 내용 보기',
    color: '#333',
    borderColor: '2px solid #dedede',
    backgroundColor: '#f3f3f3',
    size: 'large',
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState(null);

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

  const currentPosts = useCallback(
    (postlist) => {
      const indexOfLast = currentPage * postsPerPage;
      const indexOfFirst = indexOfLast - postsPerPage;
      return postlist.slice(indexOfFirst, indexOfLast);
    },
    [currentPage],
  );

  return (
    <div>
      {loading ? (
        <Text text="Loading..." />
      ) : !comments ? (
        <Button
          width="100%"
          onClick={() => getComment()}
          {...approveCommentBtnProps}
        ></Button>
      ) : (
        <div>
          {currentPosts(comments).map((comment) => (
            <CommentInfo key={true}>
              <Title size="h4" text={comment.id}></Title>
              <Text text={comment.content}></Text>
            </CommentInfo>
          ))}
          <Pagination
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={comments.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

const CommentInfo = styled.div`
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  padding: 15px 0;
  margin: 0 10px;
`;
export default CommentList;
