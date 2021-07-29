import React from 'react';
import styles from './PageNumber.module.scss';

const PageNumber = ({ currentPage, number, setCurrentPage }) => {
  return (
    <button
      className={styles['button']}
      onClick={() => setCurrentPage(number)}
      type="button"
      style={
        currentPage === number
          ? { color: 'white', backgroundColor: '#df3127' }
          : null
      }
    >
      {number}
    </button>
  );
};

export default PageNumber;
