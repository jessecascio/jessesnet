import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

/** VIEWS */
import App from './App';
import Home from './view/Home';
import SignUp from './view/SignUp';
import SignIn from './view/SignIn';
import Secure from './view/Secure';
import SignOut from './view/SignOut';
import Vip from './view/Vip';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/secure" component={Secure} />
      <Route path="/vip" component={Vip} />
      <Route path="/sign-out" component={SignOut} />
    </Route>
  </Router>,
  document.getElementById('root')
);
