import './Nav.css';
import React from 'react';
import User from './User';

const Nav = props => {
  return (
    <div className="navbar">
      <div>Link 1</div>
      <div>Link 2</div>
      <User />
    </div>
  );
};

export default Nav;
