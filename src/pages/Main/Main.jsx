import React from 'react';
import './Main.css';

import MainHeader from 'components/hardcoding/MainHeader/MainHeader';
import MainImg from './MainImg';
import MainNumOfPosts from './MainNumOfPosts';

const Main = () => {
  return (
    <>
    
      <MainHeader></MainHeader>
      <MainImg></MainImg>
      <MainNumOfPosts></MainNumOfPosts>
    </>
  );
};

export default Main;