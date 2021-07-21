import React from 'react';
import DropDownButton from 'components/atoms/DropDownButton/DropDownButton';
import DropDownContents from 'components/molecules/DropDownContents/DropDownContents';
import styled, { css } from 'styled-components';

const FilterDropDown = ({ text, type, contents, handleFilter }) => {
  console.log(text);

  console.log(contents);

  return (
    <DropDownContainer>
      <DropDownButton text={text} />
      <DropDownContentsWrapper>
        <DropDownContents
          type={type}
          contents={contents}
          handleFilter={handleFilter}
        />
      </DropDownContentsWrapper>
    </DropDownContainer>
  );
};

const DropDownContentsWrapper = styled.div`
  display: none;
  border: none;
`;

const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    ${DropDownContentsWrapper} {
      display: block;
    }
  }

  width: 50%;
  ${({ float }) => css`
    float: ${float};
  `}
`;

export default FilterDropDown;
