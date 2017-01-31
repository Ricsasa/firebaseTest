import Rebase from 're-base';

const base = Rebase.createClass({
    apiKey: "AIzaSyAlZ73daEohcIL5ONW9_PlCNhK2syqf-Nw",
    authDomain: "logintest-6a46c.firebaseapp.com",
    databaseURL: "https://logintest-6a46c.firebaseio.com/",
    //storageBucket: "qwales1-test.appspot.com",
});

        var unsuscribe = base.onAuth(this.authDataCallBack.bind(this));
        unsuscribe();    

       function     authDataCallBack(user){
        if(!user){
            this.props.router.push({
                state: {
                    isAuth: false
                },
                pathname: '/',
            });
        }
    }