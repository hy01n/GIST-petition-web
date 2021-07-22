import React from 'react';
import styled from 'styled-components';

const FilterDropDownContent = ({ content, type, handleFilter }) => {
  return (
    <Content onClick={() => handleFilter(type, content)}>{content}</Content>
  );
};

const Content = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  :hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;

export default FilterDropDownContent;
