import React from 'react';
import styles from './MainHeader.module.scss';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

const MainHeader = () => {
  const activeStyle = { color: '#df3127' };

  return (
    <header>
      <div className={classNames('inner', styles['inner'])}>
        <Link to="/">
          <img
            src="https://www.gist.ac.kr/kr/img/sub01/01030301_img21.jpg"
            className={styles['logo']}
          />
        </Link>

        <div className={styles['sub_menu']}>
          <ul className={styles['menu']}>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/">학부 담당자</Link>
            </li>
            <li>
              <Link to="/">학생 제안/민원 처리과정 안내</Link>
            </li>
            <li>
              <Link to="/login">
                <div className="material-icons">login</div>Login
              </Link>
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
              <NavLink to="/notfound" exact activeStyle={activeStyle}>
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
