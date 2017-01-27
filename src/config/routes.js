var React = require('react');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var Login = require('../containers/Login');
var Dashboard = require('../containers/Dashboard');


var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
    </Router>
);

module.exports = routes;