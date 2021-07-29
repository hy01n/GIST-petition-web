import React from 'react';
import styles from './MainVisual.module.scss';
import { Link } from 'react-router-dom';
const MainVisual = () => {
  return (
    <section className={styles['visual']}>
      <div className={styles['inner']}>
        <div className={styles['slogan']}>
          <span className={styles['fade-in']}>미래를 향한</span>
          <br />
          <span className={styles['fade-in']}>창의적 과학기술의 요람</span>
        </div>
        <div className={styles['more']}>
          <Link to="/step" className="btn">
            청원하기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainVisual;
