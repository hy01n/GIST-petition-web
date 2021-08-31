import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
// import styles from './index.module.scss';
// import classNames from 'classnames';

const Card = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 230px auto 230px;
  padding: 42px 42px;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  border-radius: 5px;
  gap: 10px;

  ${(props) => css`
    max-width: ${props.maxWidth};
  `}
  @media all and (max-width: 505px) {
    padding: 42px 20px;
  }
`;

Card.propTypes = {
  backgroundColor: PropTypes.string,
};

Card.defaultProps = {
  maxWidth: '600px',
};

export default Card;
