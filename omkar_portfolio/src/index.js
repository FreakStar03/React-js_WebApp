import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route , browserHistory } from 'react-router';
import * as serviceWorker from './serviceWorker';
import AdminPanel from  './adminPanel';
ReactDOM.render(
  <React.StrictMode>
	<Router history = {browserHistory}>
		    <Route path = "/AdminPanel" component = {AdminPanel} />
		    <Route path = "/" component = {App}>
    </Route>
 </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
