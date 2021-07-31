import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './MainVisual.scss';

const MainVisual = () => {
  let top = useRef(null);
  let bottom = useRef(null);
  const delay = 0.7;

  useEffect(() => {
    gsap.to(
      top,
      1,
      {
        delay: delay,
        opacity: 1,
      },
      [],
    );
    gsap.to(
      bottom,
      1,
      {
        delay: delay * 2,
        opacity: 1,
      },
      [],
    );
  });

  return (
    <section className="visual">
      <div className="inner">
        <div className="slogan">
          <span ref={(el) => (top = el)} className="fade_in top">
            미래를 향한
          </span>
          <br />
          <span ref={(el) => (bottom = el)} className="fade_in bottom">
            창의적 과학기술의 요람
          </span>
        </div>
        <div className="more">
          <Link to="/step" className="btn">
            청원하기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainVisual;
