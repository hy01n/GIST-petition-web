import React from 'react';
import styles from './SubMenu.module.scss';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const SubMenu = ({ labels }) => {
  return (
    <div className={styles['sub_menu']}>
      <ul className={styles['menu']}>
        <li>
          <Link to="/">{labels[0]}</Link>
        </li>
        <li>
          <a
            href="https://sites.google.com/view/gistcommunicate/%ED%95%99%EB%B6%80-%EB%8B%B4%EB%8B%B9%EC%9E%90?authuser=0"
            rel="noreferrer"
            target="_blank"
          >
            {labels[1]}
          </a>
        </li>
        <li>
          <a
            href="https://sites.google.com/view/gistcommunicate/%ED%95%99%EC%83%9D-%EC%A0%9C%EC%95%88%EB%AF%BC%EC%9B%90-%EC%B2%98%EB%A6%AC%EA%B3%BC%EC%A0%95-%EC%95%88%EB%82%B4?authuser=0"
            rel="noreferrer"
            target="_blank"
          >
            {labels[2]}
          </a>
        </li>
        <li>
          <Link to="/login">
            <div className="material-icons">login</div>
            <span className={styles.logincontents}>Login</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

SubMenu.defaultProps = {
  labels: ['홈', '학부 담당자', '학생 제안/민원 처리과정 안내'],
};

SubMenu.propTypes = {
  labels: PropTypes.array,
};

export default SubMenu;
