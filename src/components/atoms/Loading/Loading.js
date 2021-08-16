import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Loading() {
  return (
    <Loader type="Oval" color="#ccc" height={50} width={50} timeout={3000} />
  );
}

export default Loading;
