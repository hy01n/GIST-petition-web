import React, { useCallback, useEffect, useState } from 'react';
import LoadingText from 'components/atoms/LoadingText/LoadingText';
import Subject from 'components/atoms/Subject/Subject';
import axios from 'axios';
import Pagination from 'components/molecules/Pagination/Pagination';
import PostTable from 'components/organisms/PostTable';
import styles from './MyPage.module.scss';

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
        <section className={styles['my-post-list']}>
          <div className="inner">
            <Subject className={styles['subject']} text="내 청원 보기" />
            <div className={styles['contents']}>
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
          </div>
        </section>
      )}
    </>
  );
};

export default MyPage;
