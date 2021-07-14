import React from 'react';
import 'components/hardcording/MainHeader/MainHeader.css';

const MainHeader = () => {
  return (
    <div className="MainHeader__Container">
      <header>
        <div>
          <nav>
            <ul>
              <li className="main_navcom">
                <a href="/">
                  <img
                    className="logo_image"
                    alt="gistlogo"
                    src="https://www.gist.ac.kr/kr/img/sub01/01030301_img21.jpg"
                  />
                </a>
              </li>
              <li className="main_navcom">
                <a href="/petitions">모든 청원</a>
              </li>
              <li className="main_navcom">
                <a href="/mypage">나의 청원</a>
              </li>
              <li className="main_navcom">
                <a href="/">건의함 모아보기</a>
              </li>
            </ul>
          </nav>
          <div className="upper">
            <ul className="upper_nav">
              <li>
                <a href="/">홈</a>
              </li>
              <li>
                <a href="/">학부 담당자</a>
              </li>
              <li>
                <a href="/">학생 제안/민원 처리과정 안내</a>
              </li>
              {/* <li>
                <a href="/" />
              </li> */}
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
