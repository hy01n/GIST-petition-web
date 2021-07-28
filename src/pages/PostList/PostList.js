import React, { useCallback, useEffect, useState } from 'react';
import 'pages/PostList/PostList.css';
import axios from 'axios';
import Pagination from 'components/molecules/Pagination/Pagination';
import FilterAnswer from 'components/molecules/FilterAnswer/FilterAnswer';
import LoadingText from 'components/atoms/LoadingText/LoadingText';
import Subject from 'components/atoms/Subject/Subject';
import PostTable from 'components/organisms/PostTable';
import MainHeader from 'components/hardcording/MainHeader/MainHeader';
import FilterDropDown from 'components/organisms/FilterDropdown';
import styled from 'styled-components';

const PostList = () => {
  const [filterInfo, setFilterInfo] = useState({
    answered: false,
    order: '최신순',
    category: '전체',
  });

  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const handleAnsweredFilter = (value) => {
    setFilterInfo({ ...filterInfo, answered: value });
  };

  const handleDropDownFilter = (type, value) => {
    const tempFilterInfo = { ...filterInfo };
    tempFilterInfo[type] = value;
    setFilterInfo(tempFilterInfo);
  };

  const getPost = async () => {
    setLoading(true);
    // 연습용 REST API 사용
    // 선택된 answered, order, category 값 가지고 요청
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPostList(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getPost();
  }, [filterInfo]);

  const currentPosts = useCallback(
    (postlist) => {
      const indexOfLast = currentPage * postsPerPage;
      const indexOfFirst = indexOfLast - postsPerPage;
      return postlist.slice(indexOfFirst, indexOfLast);
    },
    [currentPage],
  );
  const DropDownOrderContents = [
    {
      id: 1,
      content: '최신순',
      onClick: () => setFilterInfo({ ...filterInfo, order: 'LATEST' }),
    },
    {
      id: 2,
      content: '추천순',
      onClick: () => setFilterInfo({ ...filterInfo, order: 'RECOMMENDED' }),
    },
  ];

  const DropDownCategoryContents = [
    {
      id: 1,
      content: '전체',
      onClick: () => setFilterInfo({ ...filterInfo, order: 'LATEST' }),
    },
    {
      id: 2,
      content: '분류1',
      onClick: () => setFilterInfo({ ...filterInfo, order: 'RECOMMENDED' }),
    },
    {
      id: 3,
      content: '분류2',
      onClick: () => setFilterInfo({ ...filterInfo, order: 'RECOMMENDED' }),
    },
  ];

  return (
    <>
      <MainHeader />
      {loading ? (
        <LoadingText text="Loading..." />
      ) : (
        <Container>
          <Subject text="청원 목록" />
          <div className="PostList__Filter">
            <FilterAnswer
              answered={filterInfo.answered}
              handleFilter={handleAnsweredFilter}
            />
            <FilterDropDownContainer>
              <FilterDropDown
                type="order"
                text={filterInfo.order}
                contents={DropDownOrderContents}
                handleFilter={handleDropDownFilter}
                float="left"
              />
              <FilterDropDown
                type="category"
                text={filterInfo.category}
                contents={DropDownCategoryContents}
                handleFilter={handleDropDownFilter}
                float="right"
              />
            </FilterDropDownContainer>
          </div>
          <div className="PostList__Content">
            <PostTable
              header={['분류', '제목', '청원 날짜', '참여 인원']}
              bodys={currentPosts(postList).map((post) => [
                {
                  id: 1,
                  postId: post.id,
                  header: 'category',
                  content: '분류1',
                },
                {
                  id: 2,
                  postId: post.id,
                  header: 'title',
                  content: post.title,
                },
                {
                  id: 3,
                  postId: post.id,
                  header: 'date',
                  content: '2020-10-25',
                },
                {
                  id: 4,
                  postId: post.id,
                  header: 'count',
                  content: '15',
                },
              ])}
            />
            <Pagination
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              totalPosts={postList.length}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </Container>
      )}
    </>
  );
};

const FilterDropDownContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  margin-top: 130px;
  width: 80%;
`;
export default PostList;
