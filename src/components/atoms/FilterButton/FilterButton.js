import React from 'react';

const FilterButton = ({ text, handleClick, buttonStyle }) => {
  return (
    <button type="button" onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
};

export default FilterButton;
