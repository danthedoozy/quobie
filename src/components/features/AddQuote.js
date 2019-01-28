import React from 'react';
import { withRouter } from 'react-router-dom';

// Should this be a modal or a page? IDK! A little UX help, please?

const AddQuote = ({ history }) => (
  <div className="add-quote-form">
    Add a Quote
    <button type="button" className="button btn-primary" onClick={() => history.push('/')}>Submit</button>
  </div>
);

export default withRouter(AddQuote);
