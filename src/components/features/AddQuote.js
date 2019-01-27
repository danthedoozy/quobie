import React from 'react';

const AddQuote = ({ closeModal }) => (
  <div className="add-quote-form">
    Add a Quote
    <button type="button" onClick={closeModal}>Close</button>
  </div>
);

export default AddQuote;
