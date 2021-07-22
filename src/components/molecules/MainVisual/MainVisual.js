import React from 'react';
import './MainVisual.css';
import { Link } from 'react-router-dom';

const MainVisual = () => {
  return (
    <section className="visual">
    
      <div className="inner">
        <div className="slogan">
          <span className="fade-in">미래를 향한</span><br/>
          <span className="fade-in">창의적 과학기술의 요람</span>
        </div>
        <div className="more">
          <Link to="/step" className="btn">청원하기</Link>
        </div>
      </div>

    </section>
  );
};



export default MainVisual;
