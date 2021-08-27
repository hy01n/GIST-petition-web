import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MainNumOfPosts.css';

const MainNumOfPosts = () => {
  const [count, setCount] = useState(0);

  const getCount = async () => {
    const res = await axios.get(
      `https://gist-competition-cn-server-zvxvr4r3aa-du.a.run.app/gistps/api/v1/post/count`,
    );

    setCount(res.data);
  };

  useEffect(() => {
    getCount();
  }, []);

  return (
    <div className="main_num_of_posts">
      지금 까지
      {/* <br />총 <span>{count}</span>건의 청원과 <span>{count}</span>건의 답변이
      <br /> */}
      <br />총 <span>{count}</span>건의 청원이 올라왔습니다
    </div>
  );
};

export default MainNumOfPosts;
