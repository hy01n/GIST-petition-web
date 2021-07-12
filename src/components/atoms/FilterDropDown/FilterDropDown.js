import React from 'react';

const FilterDropDown = ({ name, options, handleOption }) => {
  return (
    <select
      className="PostList__Filter__Dropdown__Order"
      name={name}
      onChange={handleOption}
    >
      {options.map((optionInfo) => (
        <option
          key={optionInfo.id}
          value={optionInfo.value}
          selected={optionInfo.selected}
          disabled={optionInfo.disabled}
        >
          {optionInfo.text}
        </option>
      ))}
    </select>
  );
};

export default FilterDropDown;
