import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './Index.css';

class Index extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Sample</h2>
        </div>
        <div>
          <p><Link to={`/products`}>Products</Link></p>
        </div>
      </div>
    );
  }
}

export default Index;
