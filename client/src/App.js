import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch >
          <Route path="/">
            <HomePage />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
