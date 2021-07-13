import React, { useCallback, useEffect, useState } from 'react';
import LoadingText from 'components/atoms/LoadingText/LoadingText';
import Subject from 'components/atoms/Subject/Subject';
import PostListInfo from 'components/molecules/PostListInfo/PostListInfo';
import axios from 'axios';
import Pagination from 'components/molecules/Pagination/Pagination';
import Posts from 'components/organisms/Posts/Posts';

const MyPage = () => {
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const getPost = async () => {
    setLoading(true);

    // 연습용 REST API 사용
    // 로그인 된 유저 토큰? 가지고 요청
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPostList(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  const currentPosts = useCallback(
    (postlist) => {
      const indexOfLast = currentPage * postsPerPage;
      const indexOfFirst = indexOfLast - postsPerPage;
      return postlist.slice(indexOfFirst, indexOfLast);
    },
    [currentPage],
  );

  return (
    <>
      {loading ? (
        <LoadingText text="Loading..." />
      ) : (
        <div className="PostList__Container">
          <Subject text="내 청원 보기" />
          <div className="PostList__Content">
            <PostListInfo />
            <Posts posts={currentPosts(postList)} />
            <Pagination
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              totalPosts={postList.length}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MyPage;
