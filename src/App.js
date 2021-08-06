import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import Header from 'components/organisms/Header/Header';
import 'App.scss';

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/petitions/:id" component={PostView} />
        <Route path="/petitions" component={PostList} />
        <Route path="/step" component={Step} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/forgetid" component={ForgetID} />
        <Route path="/forgetpwd" component={ForgetPWD} />
        <Route path="/" exact component={Main} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
