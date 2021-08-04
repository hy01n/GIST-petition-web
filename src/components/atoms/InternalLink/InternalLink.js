import React from 'react';
import "./InternalLink.css"
const InternalLink = ({text, href}) => {
  return <a className = "InternalLink" href={href}>{text}</a>;
};

export default InternalLink;