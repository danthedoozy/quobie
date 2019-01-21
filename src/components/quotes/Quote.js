import React from 'react';

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
      claps,
    }
}) => (
  <div class="quote">
    <h3>&ldquo;{content}&rdquo;</h3>
    <hr />
    <p>{title}</p>
    <p className="small">by {author}</p>
    <p className="small">page {page}, line {line}</p>
    <p>
      <span className="tag small">{type}</span>&nbsp;
      <span className="tag small">{genre}</span>
    </p>
    <p className="small">👏 {claps}</p>
    <button className="button is-small">Join discussion</button>
    <button className="button is-small">Share</button>
    <button className="button is-small">Purchase book</button>
  </div>
);

export default Quote;
