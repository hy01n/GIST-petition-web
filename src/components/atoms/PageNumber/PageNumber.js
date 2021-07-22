import React from 'react';
import styled from 'styled-components';

const PageNumber = ({ currentPage, number, setCurrentPage }) => {
  return (
    <StyledPageNumButton
      onClick={() => setCurrentPage(number)}
      type="button"
      style={currentPage === number ? { 'color': 'white', 'backgroundColor': '#df3127' } : null}
    >
      {number}
    </StyledPageNumButton>
  );
};

const StyledPageNumButton = styled.button`
  background-color: white;
  border: 1px solid #dedede;
  width: 26px;
  height: 30px;
  margin: 0 2px;
  padding: 0 3px;
  transition: .3s;
  &:hover {
    background-color: #2f363c;
    color: white;
  }
`;

export default PageNumber;
