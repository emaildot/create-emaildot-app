import React from 'react';

const stylesInternal = {
  boxSizing: 'border-box',
};

const Div = ({ children = '', styles = {} }) => {
  const stylesFinal = {
    ...stylesInternal,
    ...styles,
  };

  return <div style={stylesFinal}>{children}</div>;
};

export default Div;
