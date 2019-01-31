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
  <div>
    <h1>&ldquo;{content}&rdquo;</h1>
    <p>Title: {title}</p>
    <p>Author: {author}</p>
    <p>Page: {page}</p>
    <p>Line: {line}</p>
    <p>Genre: {genre}</p>
    <p>Type: {type}</p>
    <p>Claps: {claps}</p>
  </div>
);

export default Meta;
