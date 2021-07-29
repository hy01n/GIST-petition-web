import React, { useMemo } from 'react';
import PageNumber from 'components/atoms/PageNumber/PageNumber';
import styles from './Paging.module.scss';

const Pagination = ({
  currentPage,
  postsPerPage,
  totalPosts,
  setCurrentPage,
}) => {
  const pageNumbers = useMemo(
    () =>
      [...Array(Math.ceil(totalPosts / postsPerPage)).keys()].map(
        (key) => key + 1,
      ),
    [],
  );

  return (
    <div className={styles['PostList__Pagination']}>
      {pageNumbers.map((num) => (
        <PageNumber
          key={true}
          currentPage={currentPage}
          number={num}
          setCurrentPage={setCurrentPage}
        />
      ))}
    </div>
  );
};

export default Pagination;
