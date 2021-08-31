import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import classNames from 'classnames';

const Button = ({ ButtonText, onClickButton, ...props }) => {
  const kinds = props.kinds;
  return (
    <StyledButton
      className={classNames(styles[kinds], styles[props.size])}
      onClick={onClickButton}
      style={
        props.currentPage && props.currentPage === props.number
          ? { color: 'white', backgroundColor: '#df3127' }
          : null
      }
      type={props.type}
      {...props}
    >
      {ButtonText}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  ${(props) =>
    css`
      border: ${props.borderColor};
      border-radius: ${props.borderRadius};
      background-color: ${props.backgroundColor};
      color: ${props.color};
      width: ${props.width};
      height: ${props.height};
    `};
  @media all and (max-width: 685px) {
    font-size: 14px;
    max-height: 45px;
  }
`;

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: '#df3127',
  color: '#fff',
  size: 'medium',
  borderRadius: '0px',
};

export default Button;
