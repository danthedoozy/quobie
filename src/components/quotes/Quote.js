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
    <div class="content">
      <h3>&ldquo;{content}&rdquo;</h3>
      <hr />
      <div className="columns">
        <div className="column">
          <p className="strong">{title}</p>
          <p className="small">by {author}</p>
          <p className="small">page {page}, line {line}</p>
        </div>
        <div className="column">
          <p>
            <span className="tag is-primary">{type}</span>&nbsp;
            <span className="tag is-warning">{genre}</span>
          </p>
          <div className="columns">
            <div className="column">
              <p className="small">👏 {claps}</p>
            </div>
            <div className="column">
              <button className="button is-small">Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Quote;
