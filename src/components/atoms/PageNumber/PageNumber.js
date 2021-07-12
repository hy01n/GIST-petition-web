import React from 'react';

const PageNumber = ({ currentPage, number, setCurrentPage }) => {
  return (
    <button
      onClick={() => setCurrentPage(number)}
      type="button"
      style={currentPage === number ? { color: 'red' } : null}
    >
      {number}
    </button>
  );
};

export default PageNumber;
