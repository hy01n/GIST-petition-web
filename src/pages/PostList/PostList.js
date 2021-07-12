import React, { useCallback, useEffect, useState } from 'react';
import 'pages/PostList/PostList.css';
import axios from 'axios';
import Pagination from 'components/molecules/Pagination/Pagination';
import Posts from 'components/organisms/Posts/Posts';
import PostListInfo from 'components/molecules/PostListInfo/PostListInfo';
import FilterAnswer from 'components/molecules/FilterAnswer/FilterAnswer';
import FilterDropDowns from 'components/molecules/FilterDropDowns/FilterDropDowns';
import LoadingText from 'components/atoms/LoadingText/LoadingText';
import Subject from 'components/atoms/Subject/Subject';

const PostList = () => {
  const [answered, setAnswered] = useState(false);
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const [filterInfo, setFilterInfo] = useState({
    order: 'LATEST',
    category: 'ALL',
  });
  const handleOption = (e) => {
    const optionValue = e.target.value;
    if (e.target.name === 'order') {
      setFilterInfo({
        ...filterInfo,
        order: optionValue,
      });
    } else if (e.target.name === 'category') {
      setFilterInfo({
        ...filterInfo,
        category: optionValue,
      });
    }
  };

  const getPost = async () => {
    setLoading(true);
    // 연습용 REST API 사용
    // 선택된 answered, order, category 값 가지고 요청
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPostList(res.data);
    setLoading(false);
  };

  const handlePostSearch = () => {
    getPost();
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
          <Subject text="모든 청원" />
          <div className="PostList__Filter">
            <FilterAnswer answered={answered} setAnswered={setAnswered} />
            <FilterDropDowns handleOption={handleOption} />

            <button type="button" onClick={handlePostSearch}>
              검색
            </button>
          </div>
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

export default PostList;
