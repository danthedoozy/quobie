import React from 'react';

import '../../assets/styles/Quote.css'

// Quote cards will have 'hover states' that reveal additional functionality
// Cards will also have a 'See More' clickable for long quotes

const Quote = ({
    quote: {
      title,
      page,
      line,
      author,
      genre,
      type,
      content,
    }
}) => (
  <div className="quote">
    <h3>{content}</h3>
    <div className="columns">
      <div className="column">
        <p>{title}</p>
        <p>{author}</p>
        <p>Page {page}, line {line}</p>
      </div>
      <div className="column">
        <p>{genre}</p>
        <p>{type}</p>
      </div>
    </div>
  </div>
);

export default Quote;
