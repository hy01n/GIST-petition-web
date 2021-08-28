import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <StyledFooter></StyledFooter>;
};

const StyledFooter = styled.div`
  height: 130px;
  background-color: #ccc;
  display: block;
  position: absolute;
  bottom: -200px;
  width: 100%;
`;

export default Footer;
