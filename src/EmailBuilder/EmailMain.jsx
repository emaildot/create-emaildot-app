import React, { useEffect } from 'react';
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
  let stylesFinal = {
    // ...stylesInternal,
    ...styles,
  };

  if (!isProd && googleFont) {
    stylesFinal = {
      ...stylesFinal,
      fontFamily: bodyStyles.fontFamily ? bodyStyles.fontFamily : '',
    };
  }

  const bodyStylesFinal = {
    ...bodyStylesInternal,
    ...bodyStyles,
  };

  useEffect(() => {
    if (!isProd) {
      if (title) {
        document.title = title;
      } else {
        document.title = 'Email Builder';
      }

      if (googleFont) {
        const link = document.createElement('link');
        link.href = googleFont;
        link.rel = 'stylesheet';

        document.head.appendChild(link);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
