/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const stylesInternal = {
  boxSizing: 'border-box',
  display: 'inline-block',
};

const Link = ({ styles = {}, ...restProps }) => {
  const stylesFinal = {
    ...stylesInternal,
    ...styles,
  };

  return <a style={stylesFinal} {...restProps} />;
};

export default Link;
