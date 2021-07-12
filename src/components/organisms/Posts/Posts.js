import React from 'react';
import Post from 'components/molecules/Post/Post';

const Posts = ({ posts }) => {
  return (
    <div className="PostList__Posts">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;
