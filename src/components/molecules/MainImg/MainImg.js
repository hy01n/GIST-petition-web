import React from 'react';
import './MainImg.css';
import { Link } from 'react-router-dom';

const MainImg = () => {
  return (
    <div className="main_img">
      <div className="main_slogan">
        미래를 향한
        <br />
        창의적 과학기술의 요람
      </div>
      <div className="main_petition">
        <Link to="/step">청원하기</Link>
      </div>
    </div>
  );
};

export default MainImg;
