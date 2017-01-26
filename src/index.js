import React from 'react';
import ReactDOM from 'react-dom';

import Rebase from 're-base';

const base = Rebase.createClass({
    apiKey: "AIzaSyAlZ73daEohcIL5ONW9_PlCNhK2syqf-Nw",
    authDomain: "logintest-6a46c.firebaseapp.com",
    databaseURL: "https://logintest-6a46c.firebaseio.com/",
    //storageBucket: "qwales1-test.appspot.com",
});

class Main extends React.Component {

  constructor(){
    super();
    this.state = {
      userData: ""
    };
  }

  authHandler(e, u){    
    if(e){
      console.log(e);
    } else {
      this.setState({
        userData: JSON.stringify(u)
      });
    }
  }

  handleLogin(e){
    base.authWithOAuthPopup('facebook', this.authHandler.bind(this));
  }

  render(){
    return (
      <div>
        <nav>      
          <div className="nav-wrapper">    
           <a href="#" className="brand-logo">VsFire login proof of concept...</a>   
          </div>
        </nav>        
        <div className="row">
          <div className="col m12 center-align">            
              <a className="btn-large" onClick={(e) => this.handleLogin(e)}>Login</a>            
          </div>
        </div>
        <div className="row">
          <div className="col m6 offset-m3 center-align">            
              <h3>
                User Data
              </h3>      
              <div className="card-panel">
                <pre>
                  {this.state.userData}
                </pre>
              </div>      
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));