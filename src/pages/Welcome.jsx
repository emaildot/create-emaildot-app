import React from 'react';
import { EmailMain, Div, RawHTML } from '../EmailBuilder';

const style = {
  color: 'red',
};

const Welcome = () => {
  return (
    <EmailMain title="Welcome">
      <Div styles={style}>Hello</Div>
      <RawHTML>{`<%= name %>`}</RawHTML>
    </EmailMain>
  );
};

export default Welcome;
