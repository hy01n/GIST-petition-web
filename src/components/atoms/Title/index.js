import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Title = ({ ...props }) => {
  const Style = {
    display: 'flex',
    justifyContent: props.align,
    color: props.color,
  };

  switch (props.size) {
    case 'h1':
      return <H1 style={Style}>{props.text}</H1>;
    case 'h2':
      return <H2 style={Style}>{props.text}</H2>;
    case 'h3':
      return <H3 style={Style}>{props.text}</H3>;
    default:
      return <H4 style={Style}>{props.text}</H4>;
  }
};

const H1 = styled.h1``;

const H2 = styled.h2``;

const H3 = styled.h3``;

const H4 = styled.h4``;

Title.propTypes = {
  color: PropTypes.string,
};

Title.defaultProps = {
  color: '#333',
};

export default Title;
