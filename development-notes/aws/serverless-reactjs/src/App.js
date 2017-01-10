
import React, { Component } from 'react';

export default class App extends Component {

  // used with the force redirect
  componentWillReceiveProps(nextProps) {
    this.setState({
      children: nextProps.children
    });
  }

  render() {
    return (
      // header here
      <div>
        {this.props.children}
      </div>
      // nav here
    );
  }
}
