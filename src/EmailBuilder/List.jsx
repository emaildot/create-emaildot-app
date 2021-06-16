import React from 'react';

const stylesInternal = {
  boxSizing: 'border-box',
  margin: 0,
  paddingLeft: 20,
};

const List = ({ type = 'ul', styles = {}, children = '', ...restProps }) => {
  const stylesFinal = {
    ...stylesInternal,
    ...styles,
  };

  return (
    <>
      {type === 'ol' ? (
        <ol style={stylesFinal} {...restProps}>
          {children}
        </ol>
      ) : (
        <ul style={stylesFinal} {...restProps}>
          {children}
        </ul>
      )}
    </>
  );
};

export default List;
