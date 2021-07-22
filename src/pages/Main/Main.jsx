import React from 'react';
import MainVisual from 'components/molecules/MainVisual/MainVisual';
import MainPrecautions from 'components/molecules/MainPrecautions/MainPrecautions';
import MainNumOfPosts from 'components/molecules/MainNumOfPosts/MainNumOfPosts';
import './Main.css';

const Main = () => {
  return (
    <>
      <MainVisual />
      <MainPrecautions />
      <MainNumOfPosts />
    </>
  );
};

export default Main;
