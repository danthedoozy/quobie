import React from 'react';
import { withRouter } from 'react-router-dom';
import '../assets/styles/components/Nav.css';

const Nav = ({ history }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a
        className="brand"
        onClick={() => history.push('/')}
      >
        Quobie
      </a>
    </div>
    <button className="add-button" type="button" onClick={() => history.push('/add-quote')}> Add + </button>
  </nav>
);

export default withRouter(Nav);
