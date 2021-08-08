import React from 'react';
import Button from 'components/atoms/Button/index';
import DropDownContents from 'components/molecules/DropDownContents/DropDownContents';
import styled, { css } from 'styled-components';

const FilterDropDown = ({ text, type, contents, handleFilter }) => {
  const btnProps = {
    kinds: 'drop-down',
    backgroundColor: '#9a9a9a',
    size: 'medium',
    width: '100%',
  };
  return (
    <DropDownContainer>
      <Button ButtonText={text} {...btnProps} />
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
