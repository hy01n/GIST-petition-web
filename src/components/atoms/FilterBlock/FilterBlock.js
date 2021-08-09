import React from 'react';
import styles from './FilterBlock.module.scss';
import classNames from 'classnames';

const FilterBlock = (props) => {
  const { text, handleClick, isAnswered } = props;

  return (
    <div
      className={classNames(styles['container'], styles[isAnswered])}
      onClick={handleClick}
    >
      <div className={classNames(styles['item'], styles[isAnswered])}>
        {text}
      </div>
    </div>
  );
};

// const Block = styled.div`

//   ${(props) =>
//     props.answered &&
//     css`
//       border: 1px solid red;
//     `}
// `;
export default FilterBlock;
