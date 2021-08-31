import React from 'react';
import Button from 'components/atoms/Button';
import Card from 'components/atoms/Card';
import Contents from 'components/molecules/Contents';
import CommentInput from 'components/molecules/CommentInput';
import CommentList from 'components/organisms/CommentList';
import 'pages/PostView/index.css';
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
    <section className="wrap">
      <Card maxWidth="900px">
        <Contents id={id} />
        <CommentInput id={id} />
        <CommentList id={id} />

        <Button
          onClick={() => history.push('/petitions')}
          {...indexBtnProps}
        ></Button>
      </Card>
    </section>
  );
};

export default PostView;
