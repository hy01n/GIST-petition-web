import React from 'react';
import Title from 'components/atoms/Title';
import SubTitle from 'components/atoms/SubTitle';

const TitleBlock = ({ text1, text2 }) => {
  return (
    <div>
      <Title text={text1} />
      <SubTitle text={text2} />
    </div>
  );
};

export default TitleBlock;
