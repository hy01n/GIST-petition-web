import React, { useState } from 'react';
import styles from './MainMenu.module.scss';
import PropTypes from 'prop-types';
import menu from 'assets/outline_menu_black_48dp.png';

import { NavLink } from 'react-router-dom';

const MainMenu = ({ navLinkColor, labels, fontSize }) => {
  const [isMobMenu, setIsMobMenu] = useState(false);

  return (
    <>
      <div className={styles.main_menu}>
        <ul className={styles.menu}>
          <li className={styles[`${fontSize}`]}>
            <NavLink to="/step" exact activeStyle={{ color: navLinkColor }}>
              {labels[0]}
            </NavLink>
          </li>
          <li className={styles[`${fontSize}`]}>
            <NavLink
              to="/petitions"
              exact
              activeStyle={{ color: navLinkColor }}
            >
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
      <button
        className={styles.btn}
        onClick={() => {
          setIsMobMenu(!isMobMenu);
        }}
      >
        <img src={menu}></img>
      </button>
      {isMobMenu ? (
        <div className={styles.mob_wrap}>
          <ul className={styles.mob_menu}>
            <li className={styles[`${fontSize}`]}>
              <NavLink
                to="/step"
                onClick={() => {
                  setIsMobMenu(!isMobMenu);
                }}
              >
                {labels[0]}
              </NavLink>
            </li>
            <li className={styles[`${fontSize}`]}>
              <NavLink
                to="/petitions"
                onClick={() => {
                  setIsMobMenu(!isMobMenu);
                }}
              >
                {labels[1]}
              </NavLink>
            </li>
            <li className={styles[`${fontSize}`]}>
              <NavLink
                to="/mypage"
                onClick={() => {
                  setIsMobMenu(!isMobMenu);
                }}
              >
                {labels[2]}
              </NavLink>
            </li>
            <li
              className={styles[`${fontSize}`]}
              onClick={() => {
                setIsMobMenu(!isMobMenu);
              }}
            >
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
      ) : (
        ''
      )}
    </>
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
