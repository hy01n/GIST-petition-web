import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import classNames from 'classnames';

const Button = ({ ButtonText, onClickButton, ...props }) => {
  const petitionBtn = props.isPetitionBtn ? 'petition' : '';
  const dropDownBtn = props.isDropDownBtn ? 'drop-down' : '';
  return (
    <StyledButton
      className={classNames(
        styles[petitionBtn],
        styles[dropDownBtn],
        styles[props.size],
      )}
      onClick={onClickButton}
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
      border-radius: ${props.borderRadius};
      background-color: ${props.backgroundColor};
      color: ${props.color};
      width: ${props.width};
    `};
`;

// 너비

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
