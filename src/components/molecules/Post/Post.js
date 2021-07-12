import React from 'react';
import PostListText from 'components/atoms/PostListText/PostListText';

const Post = ({ post }) => {
  return (
    <div className="PostList__Post" key={post.id}>
      <PostListText text="AA" />
      <PostListText text={post.title} />
      <PostListText text="21-07-08" />
      <PostListText text="3명" />
    </div>
  );
};

export default Post;
