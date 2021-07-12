import React from 'react';
import PostListText from 'components/atoms/PostListText/PostListText';

const PostListInfo = () => {
  return (
    <div className="PostList__Content__Info">
      <PostListText text="분류" />
      <PostListText text="제목" />
      <PostListText text="청원 날짜" />
      <PostListText text="참여 인원" />
    </div>
  );
};

export default PostListInfo;
