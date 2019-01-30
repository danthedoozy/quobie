import React from 'react';

import Quote from './Quote';

const Quotes = ({ quotes, selectQuote }) => (
  <div className="quotes">
    {quotes.map(quote => <Quote quote={quote} selectQuote={selectQuote} key={quote.id} />)}
  </div>
);

export default Quotes;
