import React, { Component } from 'react';
import Controller from './../Controller';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

class SignUp extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const cognitoUser = Controller.user();
    if (cognitoUser) {
      this.setState({user: cognitoUser});
    }
  }

  create() {
    if (this.state.user) {
      return; // do nothing
    }
    if (!this.state.username || !this.state.password) {
      this.setState({error: 'Enter User / Password'});
      return;
    }

    const poolData = {
      UserPoolId : 'us-east-1_kvwQVUIOD9E', 
      ClientId : '7adacdq3cnhcjjot9asdaa28vtlgir' 
    };

    const userPool = new CognitoUserPool(poolData);

    const attributeList = [];

    const dataEmail = {
        Name : 'email',
        Value : this.state.username
    };
    const dataName = {
        Name : 'name',
        Value : this.state.username
    };
  
    const attributeEmail = new CognitoUserAttribute(dataEmail);
    const attributeName= new CognitoUserAttribute(dataName);
    
    attributeList.push(attributeEmail);
    attributeList.push(attributeName);

    userPool.signUp(this.state.username, this.state.password, attributeList, null, (err, result) => {
        if (err) {
          this.setState({error: err.message});
        } else {
          this.setState({success: true}); // cognitoUser
        }
    });
  }

  updateUser(e) {
    this.setState({username: e.target.value});
  }

  updatePassword(e) {
    this.setState({password: e.target.value});
  }

  render() {
    if (this.state.success === true) {
      return (
        <div className="App">
          <p style={{color: 'green'}}>Please Check Email for Code!</p>
        </div>
      );
    }

    if (this.state.user) {
      return (
        <div className="App">
          <p>Youre in chub Scout: {this.state.user.username}</p>
        </div>
      );
    } else {
      return (
        <div className="App">
          {!this.state.error ? <p>Sign Up Foo</p> : <p style={{color: 'red'}}>{this.state.error.toUpperCase()}</p>}

          <form>
            <input type="text" onChange={this.updateUser.bind(this)} /><br />
            <input type="password" onChange={this.updatePassword.bind(this)} /><br />
            <a id="createUser" onClick={this.create.bind(this)} href="#">Click Me!</a>
          </form>
        </div>
      );
    }
  }
}

export default SignUp;
