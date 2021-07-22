import React from 'react';
import styled from 'styled-components';

const Subject = ({ text }) => {
  return <SubjectText>{text}</SubjectText>;
};

export default Subject;

const SubjectText = styled.div`
  font-size: 22px;
  line-height: 40px;
  font-weight: 500;
`;
