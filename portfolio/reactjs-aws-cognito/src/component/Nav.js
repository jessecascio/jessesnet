import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router';

class Nav extends Component {

  render() {
    return (
      <div className="navContainer">
        <span className="one"><Link to='/'>HOME</Link></span>
        <span className="two"><Link to='/sign-up'>SIGN UP</Link></span>
        <span className="three"><Link to='/sign-in'>SIGN IN</Link></span>
        <span className="four"><Link to='/secure'>SECURE LIST</Link></span>
        <span className="five"><Link to='/vip'>VIP LIST</Link></span>
        <span className="six"><Link to='/sign-out'>SIGN OUT</Link></span>
      </div>
    );
  }
}

export default Nav;
