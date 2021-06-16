/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { isProd } from '../utils';

const Image = ({ src = '', prodSrc = '', styles = {}, ...restProps }) => {
  const finalSrc = isProd && prodSrc ? prodSrc : src;

  return <img src={finalSrc} style={styles} {...restProps} />;
};

export default Image;
