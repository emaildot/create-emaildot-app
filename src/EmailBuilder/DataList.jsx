import React from 'react';
import List from './List';
import DataListItem from './DataListItem';

const DataList = ({
  data = [],
  keyField = 'id',
  listItemStyles = {},
  ...restProps
}) => {
  return (
    <List {...restProps}>
      {data.map((d, index) => (
        <DataListItem
          key={d[keyField] ? d[keyField] : index}
          listItemStyles={listItemStyles}
          keyField={keyField}
          {...d}
        />
      ))}
    </List>
  );
};

export default DataList;
