import React, { useMemo } from 'react';
import Button from 'components/atoms/Button';
import styles from './index.module.scss';

const Pagination = ({
  currentPage,
  postsPerPage,
  totalPosts,
  setCurrentPage,
}) => {
  //  console.log(currentPage, postsPerPage, totalPosts);
  //  console.log(setCurrentPage);

  //  console.log([...Array(Math.ceil(56 / postsPerPage)).keys()]);

  const pageNumbers = useMemo(
    () =>
      [...Array(Math.ceil(totalPosts / postsPerPage)).keys()].map(
        (key) => key + 1,
      ),
    [],
  );

  //  console.log(pageNumbers);

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
