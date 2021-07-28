import React from 'react';
import styled, { css } from 'styled-components';

const Subject = ({ text, primary }) => {
  return (primary ? <StyledSubject primary>{text}</StyledSubject> : 
    <StyledSubject>{text}</StyledSubject>);
}


const StyledSubject = styled.h4`
  ${(props) =>
    props.primary &&
    css`
      font-size: 22px;
      border-bottom: 1px solid #d9d9d9;
    `}
`;

export default Subject;

// const SubjectText = styled.div`
//   font-size: 22px;
//   line-height: 40px;
//   font-weight: 500;
// `;