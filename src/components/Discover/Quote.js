import React from 'react';
import { withRouter } from 'react-router-dom';

// Format long quotes
const formattedQuote = content => {
  const lengthLimit = 110;
  return content.length > lengthLimit ?
    <h3>&ldquo;{content.slice(0, lengthLimit)}...&rdquo;</h3>
    : <h3>&ldquo;{content}&rdquo;</h3>;
};

const Quote = ({
  quote: {
    content,
    title,
    page,
    line,
    author,
    genre,
    type,
    claps,
    id,
  },
  history,
}) => (
  <div className="quote">
    {formattedQuote(content)}
    <hr />
    <div className="columns is-spaced-between pb2">
      <div className="column">
        <p>{title}</p>
        <p className="small">by {author}</p>
        {page ?
          <p className="small">page {page}{line ? `, line ${line}` : ''}</p>
          : null
        }
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
        <p className="small">Report</p>
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <button
          className="button btn-primary is-small"
          type="button"
          onClick={() => history.push(`/discussion/${id}`)}
        >
          Join discussion
        </button>
      </div>
    </div>
  </div>
);

export default withRouter(Quote);
