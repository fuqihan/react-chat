import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Main from './main';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(
    <Router>
      <Main />
    </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();