import React from 'react';
import styles from './SubMenu.module.scss';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const SubMenu = ({ labels }) => {
  console.log(labels);
  return (
    <div className={styles['sub_menu']}>
      <ul className={styles['menu']}>
        <li>
          <Link to="/">{labels[0]}</Link>
        </li>
        <li>
          <Link to="/">{labels[1]}</Link>
        </li>
        <li>
          <Link to="/">{labels[2]}</Link>
        </li>
        <li>
          <Link to="/login">
            <div className="material-icons">login</div>Login
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
