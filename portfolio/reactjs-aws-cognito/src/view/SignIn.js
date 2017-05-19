import React, { Component } from 'react';
import Controller from './../Controller';
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

class SignIn extends Component {

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

  signin() {
    if (this.state.user) {
      return; // do nothing
    }
    if (!this.state.username || !this.state.password) {
      this.setState({error: 'Enter User / Password'});
      return;
    }

    const authenticationData = {
      Username : this.state.username,
      Password : this.state.password
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const poolData = {
      UserPoolId : 'us-west-2_mRRbRCxn3', 
      ClientId : '5mbim4h4jl5r9371c821g6inru' 
    };
    const userPool = new CognitoUserPool(poolData);
    const userData = {
        Username : this.state.username,
        Pool : userPool
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          // console.log('access token' + result.getAccessToken().getJwtToken());
          // console.log('id token' + result.getIdToken().getJwtToken());

          this.setState({user: cognitoUser});
        },

        onFailure: (err) => {
          this.setState({error: "Invalid Credentials"});
        },

    });
    
  }

  updateUser(e) {
    this.setState({username: e.target.value});
  }

  updatePassword(e) {
    this.setState({password: e.target.value});
  }

  render() {
    if (this.state.user) {
      return (
        <div className="App">
          <p>Youre in Brah: {this.state.user.username}</p>
        </div>
      );
    } else {
      return (
        <div className="App">
          {!this.state.error ? <p>Please Sign In</p> : <p style={{color: 'red'}}>{this.state.error.toUpperCase()}</p>}

          <form>
            <input type="text" onChange={this.updateUser.bind(this)} /><br />
            <input type="password" onChange={this.updatePassword.bind(this)} /><br />
            <a id="createUser" onClick={this.signin.bind(this)} href="#">Click Me!</a>
          </form>
        </div>
      );
    }
    
  }
}

export default SignIn;
