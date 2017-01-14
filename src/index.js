import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './Home'
import Awards from './Awards'
import Projects from './Projects'
import Signup from './Signup'

ReactDOM.render(
    <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "awards" component = {Awards} />
         <Route path = "signup" component = {Signup} />
      </Route>
   </Router>
    ,document.getElementById('root')
);
