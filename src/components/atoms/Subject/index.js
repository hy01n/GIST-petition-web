import React from 'react';
import styles from './index.module.scss';

const Subject = (props) => {
  const { text, page } = props;
  return <h3 className={styles[page]}>{text}</h3>;
};

export default Subject;
