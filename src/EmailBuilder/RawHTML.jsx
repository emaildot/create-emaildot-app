import React from 'react';
import parse from 'html-react-parser';

const RawHTML = ({ children = '' }) => {
  return <>{parse(children)}</>;
};

export default RawHTML;
