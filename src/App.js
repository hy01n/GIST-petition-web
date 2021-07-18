import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'App.css';
import SignUp from 'pages/SignUp/SignUp';
import Login from 'pages/Login/Login';
import NotFound from 'pages/NotFound/NotFound';
import Main from 'pages/Main/Main';
import PostList from 'pages/PostList/PostList';
import PostView from 'pages/PostView/PostView';
import Step from 'pages/Step/Step';
import MyPage from 'pages/MyPage/MyPage';
import ForgetID from 'pages/ForgetID/ForgetID';
import ForgetPWD from 'pages/ForgetPWD/ForgetPWD';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/petitions" component={PostList} />
        <Route exact path="/step" component={Step} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/petitions/:id" component={PostView} />
        <Route exact path="/forgetid" component={ForgetID} />
        <Route exact path="/forgetpwd" component={ForgetPWD} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
