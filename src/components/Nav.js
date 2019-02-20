import React from 'react';
import AddQuote from './AddQuote';

import { withRouter } from 'react-router-dom';
import '../assets/styles/components/Nav.css';

const Nav = ({ history, handleModalContent, addQuote, closeModal }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a
        className="brand"
        onClick={() => history.push('/')}
      >
        Quobie
      </a>
    </div>
    <button className="add-button" type="button" onClick={() => handleModalContent(
      <AddQuote addQuote={addQuote} closeModal={closeModal} />
    )}> Add + </button>
  </nav>
);

export default withRouter(Nav);
