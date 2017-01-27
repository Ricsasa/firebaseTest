import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

import Rebase from 're-base';

const base = Rebase.createClass({
    apiKey: "AIzaSyAlZ73daEohcIL5ONW9_PlCNhK2syqf-Nw",
    authDomain: "logintest-6a46c.firebaseapp.com",
    databaseURL: "https://logintest-6a46c.firebaseio.com/",
    //storageBucket: "qwales1-test.appspot.com",
});

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        var unsuscribe = base.onAuth(this.authDataCallBack.bind(this));
        unsuscribe();        
    }
    authDataCallBack(user){
        if(!user){
            this.props.router.push({
                state: {
                    isAuth: false
                },
                path: '/',
            });
        }
    }
    render(){
        return (
            <h1>holi</h1>
        )
    }
}

module.exports = Dashboard;