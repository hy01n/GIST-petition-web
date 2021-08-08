import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Text = ({ ...props }) => {
  return <StyledText {...props}>{props.text}</StyledText>;
};

const StyledText = styled.span`
  ${(props) => css`
    color: {
      ${props.color};
    }
  `}
`;

Text.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

Text.defaultProps = {
  color: '#fff',
};

export default Text;
