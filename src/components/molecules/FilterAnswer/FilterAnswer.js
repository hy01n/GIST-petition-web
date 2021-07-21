import React from 'react';
import FilterBlock from 'components/atoms/FilterBlock/FilterBlock';
import styled from 'styled-components';

const FilterAnswer = ({ answered, handleFilter }) => {
  return (
    <FilterBlockWrapper>
      <FilterBlock
        text="답변 대기 중"
        handleClick={() => handleFilter(false)}
        buttonStyle={
          !answered
            ? {
                color: 'red',
              }
            : null
        }
      />
      <FilterBlock
        text="답변 완료"
        handleClick={() => handleFilter(true)}
        buttonStyle={
          answered
            ? {
                color: '#0a1645',
                borderottomColor: '#0a1645',
              }
            : null
        }
        borderRight
      />
    </FilterBlockWrapper>
  );
};

const FilterBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  border: 0;
  height: 59px;
  border-bottom: 1px solid #7f7f7f;
  cursor: pointer;
  &:hover {
    border-bottom: 5px solid #0a1645;
  }
`;
export default FilterAnswer;
