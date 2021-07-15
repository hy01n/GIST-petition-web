import React from 'react';
import Title from '../../atoms/Title/Title';
import SubTitle from '../../atoms/SubTitle/SubTitle';

const TitleBlock = ({ text1, text2 }) => {
  return (
    <div>
      <Title text={text1} />
      <SubTitle text={text2} />
    </div>
  );
};

export default TitleBlock;
