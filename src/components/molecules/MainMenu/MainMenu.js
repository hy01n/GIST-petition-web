import React from 'react';
import styles from './MainMenu.module.scss';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const MainMenu = ({ navLinkColor, labels, fontSize }) => {
  return (
    <div className={styles.main_menu}>
      <ul className={styles.menu}>
        <li className={styles[`${fontSize}`]}>
          <NavLink to="/petitions" exact activeStyle={{ color: navLinkColor }}>
            {labels[0]}
          </NavLink>
        </li>
        <li className={styles[`${fontSize}`]}>
          <NavLink to="/mypage" exact activeStyle={{ color: navLinkColor }}>
            {labels[1]}
          </NavLink>
        </li>
        <li className={styles[`${fontSize}`]}>
          <NavLink to="/notfound" exact activeStyle={{ color: navLinkColor }}>
            {labels[2]}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

MainMenu.defaultProps = {
  navLinkColor: '#df3127',
  labels: ['모든 청원', '나의 청원', '건의함 모아보기'],
  fontSize: 'medium',
};

MainMenu.propTypes = {
  navLinkColor: PropTypes.string,
  labels: PropTypes.array,
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default MainMenu;
