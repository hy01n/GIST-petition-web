import React from 'react';
import ListText from 'components/atoms/ListText/ListText';
const Comment = ({ userId, content }) => {
  return (
    <Container>
      <UserIdText>{userId}</UserIdText>
      <ListText text={content} />
    </Container>
  );
};
const Container = styled.div``;
const UserIdText = styled.span``;

export default Comment;
