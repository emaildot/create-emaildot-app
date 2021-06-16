/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const stylesInternal = {
  boxSizing: 'border-box',
  margin: 0,
};

const Paragraph = ({ styles = {}, ...restProps }) => {
  const stylesFinal = {
    ...stylesInternal,
    ...styles,
  };

  return <p style={stylesFinal} {...restProps} />;
};

export default Paragraph;
