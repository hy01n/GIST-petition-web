import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from 'components/molecules/Pagination';
import FilterAnswer from 'components/molecules/FilterAnswer/FilterAnswer';
import Loading from 'components/atoms/Loading/Loading';
import Title from 'components/atoms/Title';
import PostTable from 'components/organisms/PostTable';
import FilterDropDown from 'components/organisms/FilterDropdown';
import styles from './PostList.module.scss';

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
  //  let isAnswered = filterInfo.answered.toString();

  const getPost = async () => {
    setLoading(true);
    // 연습용 REST API 사용
    // 선택된 answered, order, category 값 가지고 요청

    // isAnswered = filterInfo.answered.toString();
    // console.log(isAnswered);
    const res = await axios.get(
      //     `https://gist-competition-cn-server-zvxvr4r3aa-du.a.run.app/gistps/api/v1/post/list?top=0&size=9&answered=${isAnswered}`, 현재 작업중...
      filterInfo.category == '전체'
        ? `https://gist-competition-cn-server-zvxvr4r3aa-du.a.run.app/gistps/api/v1/post`
        : `https://gist-competition-cn-server-zvxvr4r3aa-du.a.run.app/gistps/api/v1/post/category?categoryName=${filterInfo.category}`,
    );
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

      return postlist.slice(indexOfFirst, indexOfLast).reverse();
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
      content: '기숙사(대학/대학원)',
      onClick: () =>
        setFilterInfo({
          ...filterInfo,
          order: 'RECOMMENDED',
          category: '기숙사(대학/대학원)',
        }),
    },
    {
      id: 3,
      content: '시설운영',
      onClick: () =>
        setFilterInfo({
          ...filterInfo,
          order: 'RECOMMENDED',
          category: '시설운영',
        }),
    },
    {
      id: 4,
      content: '진로/취업',
      onClick: () =>
        setFilterInfo({
          ...filterInfo,
          order: 'RECOMMENDED',
          category: '진로/취업',
        }),
    },
    {
      id: 5,
      content: '시설운영',
      onClick: () =>
        setFilterInfo({
          ...filterInfo,
          order: 'RECOMMENDED',
          category: '시설운영',
        }),
    },
    {
      id: 6,
      content: '학적/교과/장학',
      onClick: () =>
        setFilterInfo({
          ...filterInfo,
          order: 'RECOMMENDED',
          category: '학적/교과/장학',
        }),
    },
    {
      id: 7,
      content: '학생지원/행사/동아리',
      onClick: () =>
        setFilterInfo({
          ...filterInfo,
          order: 'RECOMMENDED',
          category: '학생지원/행사/동아리',
        }),
    },
    {
      id: 8,
      content: '기획/예산/홍보',
      onClick: () =>
        setFilterInfo({
          ...filterInfo,
          order: 'RECOMMENDED',
          category: '기획/예산/홍보',
        }),
    },
    {
      id: 9,
      content: '대외협력',
      onClick: () =>
        setFilterInfo({
          ...filterInfo,
          order: 'RECOMMENDED',
          category: '대외협력',
        }),
    },
    {
      id: 9,
      content: '권익소통',
      onClick: () =>
        setFilterInfo({
          ...filterInfo,
          order: 'RECOMMENDED',
          category: '권익소통',
        }),
    },
  ];

  return (
    <>
      {loading ? (
        <div className={styles['loading']}>
          <Loading />
        </div>
      ) : (
        <section className={styles['post-list']}>
          <div className="inner">
            <Title size="h3" text="청원 목록" />
            <div className="filter">
              <FilterAnswer
                answered={filterInfo.answered}
                handleFilter={handleAnsweredFilter}
              />
              <div className={styles['drop-down']}>
                <FilterDropDown
                  classNames={styles['filterDropDwon']}
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
              </div>
            </div>
            <div className={styles['contents']}>
              <PostTable
                header={['분류', '제목', '청원 날짜', '참여 인원']}
                bodys={currentPosts(postList).map((post) => [
                  {
                    id: 1,
                    postId: post.id,
                    header: 'category',
                    content: post.category,
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
                    content: post.created,
                  },
                  {
                    id: 4,
                    postId: post.id,
                    header: 'count',
                    content: post.accepted,
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
          </div>
        </section>
      )}
    </>
  );
};

export default PostList;
