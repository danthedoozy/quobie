import React from 'react';

const Meta = ({
  quote: {
    title,
    author,
    page,
    line,
    genre,
    type,
    content,
    claps,
  }
}) => (
  <div className="discussion-meta mb2">
    <h1>&ldquo;{content}&rdquo;</h1>
    <hr />
    <div className="columns is-spaced-around pb3">
      <div className="column">
        <h3>{title}</h3>
        <p>
          <small>by {author}</small>
        </p>
        {page ?
          <p>
            <small>page {page}{line ? `, line ${line}` : ''}</small>
          </p>
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
  </div>
);

export default Meta;
