import React from 'react';

import Quote from './Quote';

const Quotes = ({ quotes }) => quotes.map(quote => <Quote quote={quote} />);

export default Quotes;
