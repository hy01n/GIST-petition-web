import React from 'react';
import 'components/hardcording/MainHeader/MainHeader.css';
import { Link, NavLink } from 'react-router-dom';

const activeStyle = { color: "#df3127" };

const MainHeader = () => {
  return (
      <header>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="http://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
        <link rel="stylesheet" href="./MainHeader.css"></link>        

        <div class="inner">
          <a href="./">
            <img src="https://www.gist.ac.kr/kr/img/sub01/01030301_img21.jpg"  class="logo" />
          </a>
    
          <div class="sub_menu">
            <ul class="menu">
              <li><a href="./">홈</a></li>
              <li><a href="javascript:void(0)">학부 담당자</a></li>
              <li><a href="javascript:void(0)">학생 제안/민원 처리과정 안내</a></li>
              <li>
                <a href="javascript:void(0)">
                  <div class="material-icons">login</div>Login
                </a>
              </li>
            </ul>
          </div>
    
            
          <div class="main_menu">
            <ul class="menu">
              <li><NavLink to="/notfound1" exact activeStyle={activeStyle}>모든 청원</NavLink></li>
              <li><NavLink to="/notfound2" exact activeStyle={activeStyle}>나의 청원</NavLink></li>
              <li><NavLink to="/notfound3" exact activeStyle={activeStyle}>건의함 모아보기</NavLink></li>
            </ul>
          </div>
    
        </div>
      </header>
  );
};

export default MainHeader;
