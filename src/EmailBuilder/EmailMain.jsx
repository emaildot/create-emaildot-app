import React from 'react';
import Div from './Div';

// const stylesInternal = {};

const EmailMain = ({ children = '', styles = {} }) => {
  const stylesFinal = {
    // ...stylesInternal,
    ...styles,
  };

  return <Div styles={stylesFinal}>{children}</Div>;
};

export default EmailMain;
