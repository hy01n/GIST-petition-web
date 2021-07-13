import React from 'react';
import { Link } from 'react-router-dom';
import ListText from 'components/atoms/ListText/ListText';

const Post = ({ post }) => {
  return (
    <div className="PostList__Post" key={post.id}>
      <ListText text="AA" />
      <Link to={`/petitions/${post.id}`}>
        <ListText text={post.title} />
      </Link>
      <ListText text="21-07-08" />
      <ListText text="3명" />
    </div>
  );
};

export default Post;
