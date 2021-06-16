import React from 'react';
import ListItem from './ListItem';
import RawHTML from './RawHTML';

const DataListItem = ({
  description = '',
  listItemStyles = {},
  styles = {},
  isRawHTML = false,
  // keyField = '',
}) => {
  const stylesFinal = {
    ...listItemStyles,
    ...styles,
  };

  return (
    <ListItem styles={stylesFinal}>
      {isRawHTML ? <RawHTML>{description}</RawHTML> : description}
    </ListItem>
  );
};

export default DataListItem;
