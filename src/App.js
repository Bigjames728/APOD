import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// CSS Styles
import './Global.css';
import './App.css';

// Import Components

import PhotoList from './components/PhotoList';

function App() {
  return (

    <Router>
    
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/pic-of-the-day" />} />
        <Route exact path="/pic-of-the-day" component={PhotoList} />

      </Switch>
    </Router>
    
  );
}

export default App;
