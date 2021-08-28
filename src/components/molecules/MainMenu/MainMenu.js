import React from 'react';
import styles from './MainMenu.module.scss';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const MainMenu = ({ navLinkColor, labels, fontSize }) => {
  return (
    <div className={styles.main_menu}>
      <ul className={styles.menu}>
        <li className={styles[`${fontSize}`]}>
          <NavLink to="/step" exact activeStyle={{ color: navLinkColor }}>
            {labels[0]}
          </NavLink>
        </li>
        <li className={styles[`${fontSize}`]}>
          <NavLink to="/petitions" exact activeStyle={{ color: navLinkColor }}>
            {labels[1]}
          </NavLink>
        </li>
        <li className={styles[`${fontSize}`]}>
          <NavLink to="/mypage" exact activeStyle={{ color: navLinkColor }}>
            {labels[2]}
          </NavLink>
        </li>
        <li className={styles[`${fontSize}`]}>
          {/* <NavLink to="/notfound" exact activeStyle={{ color: navLinkColor }}>
            {labels[3]}
          </NavLink> */}
          <a
            href="https://sites.google.com/view/gistcommunicate/%ED%99%88"
            rel="noreferrer"
            target="_blank"
          >
            {labels[3]}
          </a>
        </li>
      </ul>
    </div>
  );
};

MainMenu.defaultProps = {
  navLinkColor: '#df3127',
  labels: ['청원하기', '모든 청원', '나의 청원', '공식창구 모아보기'],
  fontSize: 'medium',
};

MainMenu.propTypes = {
  navLinkColor: PropTypes.string,
  labels: PropTypes.array,
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default MainMenu;
