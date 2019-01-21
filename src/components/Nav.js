import React from 'react';

import AddQuote from './mechanics/AddQuote';

import '../assets/styles/components/Nav.css';

const Nav = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="brand" href="/">
        Quobie
      </a>
    </div>
    <AddQuote />
  </nav>
);

export default Nav;
