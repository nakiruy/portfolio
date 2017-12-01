import React from 'react';
import ReactDOM from 'react-dom';

import {
  Route,
  Link,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';

import '../style.scss';

import App from './components/App';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>,document.getElementById('app'));