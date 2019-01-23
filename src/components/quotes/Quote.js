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
    <div className="columns is-spaced-between">
      <div className="column">
        <p>{title}</p>
        <p className="small">by {author}</p>
        <p className="small">page {page}, line {line}</p>
      </div>
      <div className="column text-align-right">
        <p>
          <span className="tag small">{type}</span>
        </p>
        <p>
          <span className="tag small">{genre}</span>
        </p>
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <p className="small"><span role="img" aria-label="clap-emoji">👏</span> {claps}</p>
      </div>
      <div className="column">
        <p className="small">Share</p>
      </div>
      <div className="column">
        <p className="small">Report</p>
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <button className="button is-small">Join discussion</button>
      </div>
    </div>
  </div>
);

export default Quote;
