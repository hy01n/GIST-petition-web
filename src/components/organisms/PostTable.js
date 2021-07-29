import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostTable.module.scss';

const PostTableColumn = ({ data }) => {
  return data.header === 'title' ? (
    <Link to={`/petitions/${data.postId}`}>
      <td>{data.content}</td>
    </Link>
  ) : (
    <td>{data.content}</td>
  );
};

const PostTableRow = ({ row }) => {
  return (
    <>
      <tr>
        {row.map((data) => (
          <PostTableColumn key={true} data={data} />
        ))}
      </tr>
    </>
  );
};
const PostTable = ({ header, bodys }) => {
  return (
    <table className={styles['contents__table']}>
      <thead>
        <tr>
          {header.map((data) => (
            <th key={true}>{data}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodys.map((row) => (
          <PostTableRow key={true} row={row} />
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
