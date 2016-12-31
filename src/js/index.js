import '../scss/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

var ReactGA = require('react-ga');
ReactGA.initialize('UA-89597232-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

let app = document.getElementById('app');
ReactDOM.render(<Router history={browserHistory} onUpdate={logPageView} routes={routes} />, app);
