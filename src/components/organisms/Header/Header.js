import React from 'react';
import MainMenu from 'components/molecules/MainMenu/MainMenu';
import SubMenu from 'components/molecules/SubMenu/SubMenu';
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Header = () => {
  const gistKrImg = 'https://www.gist.ac.kr/kr/img/sub01/01030301_img21.jpg';
  const gistColor = '#df3127';

  const subMenuLabels = ['홈', '학부 담당자', '학생 제안/민원 처리과정 안내'];
  const mainMenuLabels = ['모든 청원', '나의 청원', '건의함 모아보기'];
  const fontSize = 'medium';

  return (
    <div className={classNames('inner', styles['inner'])}>
      <Link to="/">
        <img src={gistKrImg} className={styles['logo']} />
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
