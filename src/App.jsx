import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

const getRoutes = () => {
  return routes.map((props) => (
    <Route
      key={props.id}
      path={props.path}
      render={(p) => <props.component {...p} />}
      exact={props.exact}
      strict={props.strict}
    />
  ));
};

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>{getRoutes()}</Switch>
      </Router>
    </div>
  );
}

export default App;
