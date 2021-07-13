import React from 'react';
import styled from 'styled-components';

const ListText = ({ text }) => {
  return <Text>{text}</Text>;
};

const Text = styled.span`
  border: 1px solid blue;
`;

export default ListText;
