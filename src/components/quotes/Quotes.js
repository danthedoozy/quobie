import React from 'react';

import Quote from './Quote';

// Quotes will be tiles

const Quotes = ({ quotes }) => quotes.map(quote => <Quote quote={quote} />);

export default Quotes;
