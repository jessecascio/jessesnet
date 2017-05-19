import React, { Component } from 'react';
import Controller from './../Controller';

class SignOut extends Component {

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

  signout() {
    if (this.state.user) {
      this.state.user.signOut();
      this.setState({user: undefined});
      window.location.reload(); // hacky way to refresh session
    }
  }

  render() {
    if (this.state.user) {
      return (
        <div className="App">
          <a onClick={this.signout.bind(this)} href="#">Sign Out Of:</a> <span>{this.state.user.username}</span>
        </div>
      );
    } else {
      return (
        <div className="App">
          <p>NOT Signed In Yo!</p>
        </div>
      );
    }
    
  }
}

export default SignOut;
