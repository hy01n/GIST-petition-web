import React from 'react';
import { Link } from 'react-router-dom';
import Text from 'components/atoms/Text';

const Post = ({ post }) => {
  return (
    <div className="PostList__Post" key={post.id}>
      <Text text="AA" />
      <Link to={`/petitions/${post.id}`}>
        <Text text={post.title} />
      </Link>
      <Text text="21-07-08" />
      <Text text="3명" />
    </div>
  );
};

export default Post;
