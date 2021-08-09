import React from 'react';
import Button from 'components/atoms/Button';
import Card from 'components/atoms/Card';
import Contents from 'components/molecules/Contents';
import CommentInput from 'components/molecules/CommentInput';
import CommentList from 'components/organisms/CommentList';

const PostView = ({ history, match }) => {
  const { id } = match.params;

  const indexBtnProps = {
    ButtonText: '목록',
    borderColor: '2px solid #dedede',
    backgroundColor: '#f3f3f3',
    color: '#333',
    width: '120px',
    size: 'large',
  };

  return (
    <Card maxWidth="900px">
      <Contents id={id} />
      <CommentInput />
      <CommentList id={id} />

      <Button
        onClick={() => history.push('/petitions')}
        {...indexBtnProps}
      ></Button>
    </Card>
  );
};

export default PostView;
