import React from 'react';
import styled from 'styled-components';
import DropDownContent from 'components/atoms/DropDownContent/DropDownContent';

const DropDownContents = ({ contents, type, handleFilter }) => {
  return (
    <ContentsWrapper>
      {contents.map((data) => (
        <DropDownContent
          key={data.id}
          type={type}
          content={data.content}
          handleFilter={handleFilter}
        />
      ))}
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 100%;
`;

export default DropDownContents;
