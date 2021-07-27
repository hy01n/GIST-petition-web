import React, { useMemo } from 'react';
import PageNumber from 'components/atoms/PageNumber/PageNumber';
import styled from 'styled-components';

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
    <Paging className="PostList__Pagination">
      {pageNumbers.map((num) => (
        <PageNumber key={true}
          currentPage={currentPage}
          number={num}
          setCurrentPage={setCurrentPage}
        />
      ))}
    </Paging>
  );
};

const Paging = styled.div`
  margin: 30px 0 0;
  text-align: center;
`;

export default Pagination;
