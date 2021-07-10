import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'App.css';
import Main from 'pages/Main/Main';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
import NotFound from 'pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/notfound" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
