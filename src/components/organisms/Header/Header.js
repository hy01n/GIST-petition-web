import React from 'react';
import MainMenu from 'components/molecules/MainMenu/MainMenu';
import SubMenu from 'components/molecules/SubMenu/SubMenu';
import styles from './Header.module.scss';
import logo from 'assets/images/logo.jpg';
import { Link } from 'react-router-dom';
const Header = () => {
  const gistColor = '#df3127';

  const subMenuLabels = ['홈', '학부 담당자', '학생 제안/민원 처리과정 안내'];
  const mainMenuLabels = [
    '청원하기',
    '모든 청원',
    '나의 청원',
    '공식창구 모아보기',
  ];
  const fontSize = 'medium';

  return (
    <div className={styles['inner']}>
      <Link to="/">
        <img src={logo} className={styles['logo']} alt="지스트" />
      </Link>
      <SubMenu labels={subMenuLabels}></SubMenu>
      <MainMenu
        navLinkColor={gistColor}
        labels={mainMenuLabels}
        fontSize={fontSize}
      ></MainMenu>
    </div>
  );
};

export default Header;
