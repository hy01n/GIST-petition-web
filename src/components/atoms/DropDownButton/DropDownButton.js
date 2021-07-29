import React from 'react';
import styles from './DropDownButton.module.scss';

const DropDownButton = ({ text }) => {
  return <button className={styles['button']}>{text}</button>;
};

export default DropDownButton;
