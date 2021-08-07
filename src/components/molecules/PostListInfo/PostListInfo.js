import React from 'react';
import Text from 'components/atoms/Text';

const PostListInfo = () => {
  return (
    <div className="PostList__Content__Info">
      <Text text="분류" />
      <Text text="제목" />
      <Text text="청원 날짜" />
      <Text text="참여 인원" />
    </div>
  );
};

export default PostListInfo;
