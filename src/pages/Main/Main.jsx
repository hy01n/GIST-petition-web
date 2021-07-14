import React from 'react';
import MainHeader from 'components/hardcording/MainHeader/MainHeader';
import MainImg from 'components/molecules/MainImg/MainImg';
import MainNumOfPosts from 'components/molecules/MainNumOfPosts/MainNumOfPosts';
import './Main.css';

const Main = () => {
  return (
    <>
      <MainHeader />
      <MainImg />
      <MainNumOfPosts />
    </>
  );
};

export default Main;
