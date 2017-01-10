import { Router, Route, browserHistory } from 'react-router'
import React from 'react';
import ReactDOM from 'react-dom';

/** VIEWS */
import App from './App';
import Index from './view/Index';
import Products from './view/Products';

ReactDOM.render(
 <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Index} />
      <Route path="/products" component={Products} />
    </Route>
  </Router>,
  document.getElementById('root')
);

