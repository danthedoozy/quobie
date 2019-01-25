import React from 'react';

import Quote from './Quote';

const Quotes = ({ quotes }) => (
  <div className="quotes">
    {quotes.map(quote => <Quote quote={quote} key={quote.id} />)}
  </div>
);

export default Quotes;
