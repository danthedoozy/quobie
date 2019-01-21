import React from 'react';

import AddQuote from './mechanics/AddQuote';

import '../assets/styles/Nav.css';

const Nav = () => (
  <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item brand" href="/">
        Quobie
      </a>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <AddQuote />
      </div>
    </div>
  </nav>
);

export default Nav;
