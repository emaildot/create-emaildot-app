import React from 'react';
import EmailMain from '../EmailBuilder/EmailMain.js';
import Div from '../EmailBuilder/Div.js';

const style = {
  color: 'red',
};

const HelloWorld = () => {
  return (
    <EmailMain>
      <Div styles={style}>Hello</Div>
    </EmailMain>
  );
};

export default HelloWorld;
