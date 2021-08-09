import React from 'react';
import styled from 'styled-components';

const Boundary = ({ ...props }) => {
  return <StyledBoundary style={props.style}></StyledBoundary>;
};

const StyledBoundary = styled.div`
  border-bottom: 1px solid #d9d9d9;
`;

export default Boundary;
