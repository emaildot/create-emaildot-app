import React from 'react';
import { EmailMain, Div } from '../EmailBuilder';

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
