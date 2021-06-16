import React from 'react';
import Layout from './Layout';
import Div from './Div';
import { isProd } from '../utils';

// const stylesInternal = {};
const bodyStylesInternal = { padding: 0, margin: 0, boxSizing: 'border-box' };

const EmailMain = ({
  children = '',
  styles = {},
  bodyStyles = {},
  title = '',
  googleFont = '',
}) => {
  const stylesFinal = {
    // ...stylesInternal,
    ...styles,
  };

  const bodyStylesFinal = {
    ...bodyStylesInternal,
    ...bodyStyles,
  };

  return (
    <>
      {isProd ? (
        <Layout styles={bodyStylesFinal} title={title} googleFont={googleFont}>
          <Div styles={stylesFinal}>{children}</Div>
        </Layout>
      ) : (
        <Div styles={stylesFinal}>{children}</Div>
      )}
    </>
  );
};

export default EmailMain;
