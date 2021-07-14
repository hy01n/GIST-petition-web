import React from 'react';
import { Link } from 'react-router-dom';

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
          <PostTableColumn data={data} />
        ))}
      </tr>
    </>
  );
};
const PostTable = ({ header, bodys }) => {
  return (
    <table>
      <thead>
        <tr>
          {header.map((data) => (
            <th>{data}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodys.map((row) => (
          <PostTableRow row={row} />
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
