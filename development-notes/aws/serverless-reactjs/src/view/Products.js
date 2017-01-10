import React, { Component } from 'react';
import Controller from './../controller/Base.js';
import { Link } from 'react-router';
import logo from './logo.svg';

class Products extends Component {

  componentDidMount() {
   // init here
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>PRODUCTs Page</h2>
        </div>
        <div>
          <p><Link to={`/`}>Home</Link></p>
        </div>
      </div>
    );
  }
}

export default Products;
