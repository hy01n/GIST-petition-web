import React from 'react';
import ListText from 'components/atoms/ListText/ListText';

const PostListInfo = () => {
  return (
    <div className="PostList__Content__Info">
      <ListText text="분류" />
      <ListText text="제목" />
      <ListText text="청원 날짜" />
      <ListText text="참여 인원" />
    </div>
  );
};

export default PostListInfo;
