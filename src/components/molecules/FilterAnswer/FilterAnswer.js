import React from 'react';
import FilterButton from 'components/atoms/FilterButton/FilterButton';

const FilterAnswer = ({ answered, setAnswered }) => {
  return (
    <div className="PostList__Filter__Answer">
      <FilterButton
        text="답변 안 됨"
        handleClick={() => setAnswered(false)}
        buttonStyle={
          !answered
            ? {
                color: 'red',
              }
            : null
        }
      />
      <FilterButton
        text="답변 완료"
        handleClick={() => setAnswered(true)}
        buttonStyle={
          answered
            ? {
                color: 'red',
              }
            : null
        }
      />
    </div>
  );
};

export default FilterAnswer;
