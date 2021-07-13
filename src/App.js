import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'App.css';
import SignUp from 'pages/SignUp/SignUp';
import Login from 'pages/Login/Login';
import NotFound from 'pages/NotFound/NotFound';
import Main from 'pages/Main/Main';
import PostList from 'pages/PostList/PostList';
import PostView from 'pages/PostView/PostView';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/notfound" component={NotFound} />
        <Route exact path="/petitions" component={PostList} />
        <Route exact path="/petitions/:id" component={PostView} />
      </Switch>
    </Router>
  );
}

export default App;
