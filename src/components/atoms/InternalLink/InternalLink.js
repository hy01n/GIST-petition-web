import React from 'react';

const InternalLink = ({ text, href }) => {
  return <a href={href}>{text}</a>;
};

export default InternalLink;
