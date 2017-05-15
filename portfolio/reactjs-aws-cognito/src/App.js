import React, { Component } from 'react';

import Header from './component/Header';
import Nav from './component/Nav';

export default class App extends Component {

  // used with the force redirect
  componentWillReceiveProps(nextProps) {
    this.setState({
      children: nextProps.children
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Nav user={this.props.user} />
        {this.props.children}
      </div>
    );
  }
}
