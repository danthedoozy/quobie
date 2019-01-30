import React from 'react';

const Meta = ({
  currentQuote: {
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
    <h1>{content}</h1>
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
