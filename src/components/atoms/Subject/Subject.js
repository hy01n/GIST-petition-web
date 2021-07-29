import React from 'react';
import styles from './Subject.module.scss';
import classNames from 'classnames';

const Subject = (props) => {
  const { text, page } = props;
  return (
    <h4 className={classNames(styles['subject'], styles[page])}>{text}</h4>
  );
};

// import styled, { css } from 'styled-components';

// const Subject = ({ text, page }) => {
//   console.log(page);
//   return JSON.stringify(page) === 'postview' ? (
//     <StyledSubject page>{text}</StyledSubject>
//   ) : (
//     <StyledSubject>{text}</StyledSubject>
//   );
// };

// const StyledSubject = styled.h4`
//   font-size: 20px;
//   ${(props) =>
//     props &&
//     css`
//       font-size: 22px;
//       padding-bottom: 10px;
//       border-bottom: 1px solid #d9d9d9;
//     `}
// `;

export default Subject;
