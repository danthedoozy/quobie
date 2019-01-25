import React from 'react';

import '../assets/styles/components/Nav.css';

const Nav = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="brand" href="/">
        Quobie
      </a>
    </div>
    <button className="add-button" type="button"> Add + </button>
  </nav>
);

export default Nav;
