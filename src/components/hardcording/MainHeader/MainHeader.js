import React from 'react';
import 'components/hardcording/MainHeader/MainHeader.css';
import { Link, NavLink } from 'react-router-dom';

const activeStyle = { color: "#df3127" };

const MainHeader = () => {
  return (
    <div className="MainHeader__Container">
      <header>
        <div>
          <div className="upper">
              <ul className="upper_nav">
                <li>
                  <Link to="/">홈</Link>
                </li>
                <li>
                  <Link to="/notfound">학부 담당자</Link>
                </li>
                <li>
                  <Link to="/notfound">학생 제안/민원 처리과정 안내</Link>
                </li>
                {/* <li>
                  <a href="/" />
                </li> */}
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          <nav>
            <ul>
              <li className="main_navcom">
                <Link to="/">
                  <img
                    className="logo_image"
                    alt="gistlogo"
                    src="https://www.gist.ac.kr/kr/img/sub01/01030301_img21.jpg"
                  />
                </Link>
              </li>
              <li className="main_navcom">
                <NavLink to="/petitions" activeStyle={activeStyle}>모든 청원</NavLink>
              </li>
              <li className="main_navcom">
                <NavLink to="/mypage" activeStyle={activeStyle}>나의 청원</NavLink>
              </li>
              <li className="main_navcom">
                <NavLink to="/notfound" exact activeStyle={activeStyle}>건의함 모아보기</NavLink>
              </li>
            </ul>
          </nav>

        </div>
      </header>
    </div>
  );
};

export default MainHeader;
