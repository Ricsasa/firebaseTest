import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';
import Rebase from 're-base';
import authStatus from '../services/authService';

const base = Rebase.createClass({
    apiKey: "AIzaSyAlZ73daEohcIL5ONW9_PlCNhK2syqf-Nw",
    authDomain: "logintest-6a46c.firebaseapp.com",
    databaseURL: "https://logintest-6a46c.firebaseio.com/",
    //storageBucket: "qwales1-test.appspot.com",
});

const validateAuth = () => {

}

export var routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
    </Router>
);