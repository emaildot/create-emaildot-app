import React from 'react';

const stylesInternal = {
  boxSizing: 'border-box',
};

const ListItem = ({ styles = {}, ...restProps }) => {
  const stylesFinal = {
    ...stylesInternal,
    ...styles,
  };

  return <li style={stylesFinal} {...restProps} />;
};

export default ListItem;
