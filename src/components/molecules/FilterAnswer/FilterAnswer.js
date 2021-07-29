import React from 'react';
import FilterBlock from 'components/atoms/FilterBlock/FilterBlock';
import styles from './FilterAnswer.module.scss';

const FilterAnswer = ({ answered, handleFilter }) => {
  return (
    <div className={styles['filter__answer']}>
      <FilterBlock
        text="답변 대기 중"
        handleClick={() => handleFilter(false)}
        isAnswered={!answered ? 'unanswered' : ''}
      />
      <FilterBlock
        text="답변 완료"
        handleClick={() => handleFilter(true)}
        isAnswered={answered ? 'answered' : ''}
      />
    </div>
  );
};

// const FilterAnswer = ({ answered, handleFilter }) => {
//   return (
//     <div className={styles['filter__answer']}>
//       <FilterBlock
//         text="답변 대기 중"
//         handleClick={() => handleFilter(false)}
//         buttonStyle={
//           !answered
//             ? {
//                 color: '#df3127',
//               }
//             : null
//         }
//       />
//       <FilterBlock
//         text="답변 완료"
//         handleClick={() => handleFilter(true)}
//         buttonStyle={
//           answered
//             ? {
//                 color: '#df3127',
//               }
//             : null
//         }
//         borderRight
//       />
//     </div>
//   );
// };

export default FilterAnswer;
