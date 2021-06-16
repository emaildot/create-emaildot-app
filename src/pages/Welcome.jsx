import React from 'react';
import { EmailMain, Div } from '../EmailBuilder';

const style = {
  color: 'red',
};

const Welcome = () => {
  return (
    <EmailMain title="Welcome">
      <Div styles={style}>Hello</Div>
    </EmailMain>
  );
};

export default Welcome;
