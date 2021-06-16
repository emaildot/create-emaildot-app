import React from 'react';

const Layout = ({ children = '', styles = {} }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={styles}>{children}</body>
    </html>
  );
};

export default Layout;
