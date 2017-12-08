import React from 'react';
import ReactDOM from 'react-dom';

import {
  Route,
  Link,
  Redirect,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

import '../style.scss';

import App from './components/App';
import ThreeScanDesign from './components/ThreeScanRedesign';

ReactDOM.render(
  <Router>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/threescan" component={ThreeScanDesign} />
    </div>
  </Router>, document.getElementById('app'));