import React, { useMemo } from 'react';
import Button from 'components/atoms/Button';
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

  const props = {
    kinds: 'page-num',
    color: '#333',
    borderColor: '1px solid #dedede;',
    backgroundColor: 'white',
    size: 'small',
  };

  return (
    <div className={styles['PostList__Pagination']}>
      {pageNumbers.map((num) => (
        <Button
          key={true}
          currentPage={currentPage}
          number={num}
          ButtonText={num}
          onClickButton={() => setCurrentPage(num)}
          {...props}
        />
      ))}
    </div>
  );
};

export default Pagination;
