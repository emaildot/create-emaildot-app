import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

const styles = {
  ul: {
    fontSize: 25,
  },
  li: {
    marginBottom: 20,
  },
};

const IndexPage = () => {
  const filteredRoutes = routes
    .filter((r) => r.id !== 'index')
    .map((r) => ({ path: r.path, id: r.id }));

  return (
    <ul style={styles.ul}>
      <h1>Emails list</h1>
      {filteredRoutes.map((r) => (
        <li key={r.id} style={styles.li}>
          <Link to={r.path}>{r.id}</Link>
        </li>
      ))}
    </ul>
  );
};

export default IndexPage;
