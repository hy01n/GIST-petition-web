import React from 'react';
import Comment from 'components/molecules/Comment';

const CommentList = ({ comments }) => {
  return (
    <Container>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          userId={comment.userId}
          content={comment.content}
        />
      ))}
    </Container>
  );
};
const Container = styled.div``;

export default CommentList;
