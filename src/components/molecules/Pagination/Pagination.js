import React, { useMemo } from 'react';
import PageNumber from 'components/atoms/PageNumber/PageNumber';

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
    <div className="PostList__Pagination">
      {pageNumbers.map((num) => (
        <PageNumber
          currentPage={currentPage}
          number={num}
          setCurrentPage={setCurrentPage}
        />
      ))}
    </div>
  );
};

export default Pagination;
