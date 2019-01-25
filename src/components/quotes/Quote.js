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
    id,
  },
}) => (
  <div className="quote">
    <h3>&ldquo;{content}&rdquo;</h3>
    <hr />
    <div className="columns is-spaced-between pb2">
      <div className="column">
        <p>{title}</p>
        <p className="small">by {author}</p>
        <p className="small">page {page}, line {line}</p>
      </div>
      <div className="column text-align-right">
        <p>
          <span className="tag-purple small">{genre}</span>
        </p>
        <p>
          <span className="tag-green small">{type}</span>
        </p>
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <p className="small">
          <span role="img" aria-label="clap-emoji" className="clap-emoji">
            👏
          </span> {claps}
        </p>
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
        <button className="button is-small" type="button">Join discussion</button>
      </div>
    </div>
  </div>
);

export default Quote;
