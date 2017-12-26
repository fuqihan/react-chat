import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as router from "./router/index";
import './index.css';

ReactDOM.render(router, document.getElementById("root"));
registerServiceWorker();
