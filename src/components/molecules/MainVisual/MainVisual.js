import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './MainVisual.scss';
import Button from 'components/atoms/Button/index';

const MainVisual = () => {
  let top = useRef(null);
  let bottom = useRef(null);
  const delay = 0.7;

  const props = {
    kinds: 'petition',
    ButtonText: '청원하기',
    backgroundColor: '#df3127',
    color: '#fff',
    size: 'large',
  };

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
          <Button as="a" href="/step" {...props}>
            청원하기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MainVisual;
