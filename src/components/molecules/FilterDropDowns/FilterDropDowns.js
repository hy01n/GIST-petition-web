import React from 'react';
import 'components/molecules/FilterDropDowns/FilterDropDowns.css';
import FilterDropDown from 'components/atoms/FilterDropDown/FilterDropDown';

const FilterDropDowns = ({ handleOption }) => {
  return (
    <div className="PostList__Filter__Dropdown">
      <FilterDropDown
        name="order"
        options={[
          {
            id: 1,
            value: 'SELECTED',
            text: '나열 순서',
            selected: true,
            disabled: true,
          },
          {
            id: 2,
            value: 'LATEST',
            text: '최신순',
            selected: false,
            disabled: false,
          },
          {
            id: 3,

            value: 'RECOMMENDED',
            text: '동의순',
            selected: false,
            disabled: false,
          },
        ]}
        handleOption={handleOption}
      />
      <FilterDropDown
        name="category"
        options={[
          {
            id: 1,
            value: 'ALL',
            text: '전체',
            selected: true,
            disabled: true,
          },
          {
            id: 2,
            value: '분류1',
            text: '분류1',
            selected: false,
            disabled: false,
          },
          {
            id: 3,

            value: '분류2',
            text: '분류2',
            selected: false,
            disabled: false,
          },
        ]}
        handleOption={handleOption}
      />
    </div>
  );
};

export default FilterDropDowns;
