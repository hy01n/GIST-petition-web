import React from 'react';
import styles from './MainHeader.module.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
const activeStyle = { color: '#df3127' };

const MainHeader = () => {
  return (
    <header>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css"
      />
      <link rel="stylesheet" href="./MainHeader.css"></link>

      <div className={classNames('inner', styles['inner'])}>
        <a href="./">
          <img
            src="https://www.gist.ac.kr/kr/img/sub01/01030301_img21.jpg"
            className={styles['logo']}
          />
        </a>

        <div className={styles['sub_menu']}>
          <ul className={styles['menu']}>
            <li>
              <a href="./">홈</a>
            </li>
            <li>
              <a href="javascript:void(0)">학부 담당자</a>
            </li>
            <li>
              <a href="javascript:void(0)">학생 제안/민원 처리과정 안내</a>
            </li>
            <li>
              <a href="./login">
                <div className="material-icons">login</div>Login
              </a>
            </li>
          </ul>
        </div>

        <div className={styles['main_menu']}>
          <ul className={styles['menu']}>
            <li>
              <NavLink to="/petitions" exact activeStyle={activeStyle}>
                모든 청원
              </NavLink>
            </li>
            <li>
              <NavLink to="/mypage" exact activeStyle={activeStyle}>
                나의 청원
              </NavLink>
            </li>
            <li>
              <NavLink to="/notfound3" exact activeStyle={activeStyle}>
                건의함 모아보기
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
