import React from 'react';
import styled, { css } from 'styled-components';

const FilterBlock = (props) => {
  console.log(props);
  const { text, handleClick, buttonStyle } = props;
  return (
    <Block onClick={handleClick} style={buttonStyle}>
      {text}
    </Block>
  );
};

// const Li = styled.li`
//   display: inline;
//   margin: 0;
//   text-align: center;
//   border: 1px solid #7f7f7f;
// `;

const Block = styled.div`
  width: 50%;
  text-align: center;
  // border: 0;
  ${(props) =>
    props.answered &&
    css`
      border: 1px solid red;
    `}
`;
export default FilterBlock;
