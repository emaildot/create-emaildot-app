import React from 'react';

const Layout = ({ children = '', styles = {}, title = '' }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </head>
      <body style={styles}>{children}</body>
    </html>
  );
};

export default Layout;
