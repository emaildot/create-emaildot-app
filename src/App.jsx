import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Controls from './EmailBuilder/Controls';
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
  const [controls, setControls] = useState({
    displaySize: 'email',
    bgColor: 'grey',
  });

  const handleUpdateControls = (field, value) => {
    setControls({
      ...controls,
      [field]: value,
    });
  };

  return (
    <div className="App">
      <div className={`routes ${controls.displaySize} ${controls.bgColor}`}>
        <div>
          <Router>
            <Switch>{getRoutes()}</Switch>
          </Router>
        </div>
      </div>

      <Controls
        handleUpdateControls={handleUpdateControls}
        controls={controls}
      />
    </div>
  );
}

export default App;
