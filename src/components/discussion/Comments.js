import React from 'react';

import Comment from './Comment';

// Comments will have 'hover states' that reveal additional functionality
// Comments will also have a 'See More' clickable for long quotes

const Comments = ({ comments }) => (
  <div>
    <h1>Comments:</h1>
    <hr />
    <ul>
      {comments.map(({
        id,
        content,
        author,
        claps,
      }) => (
        <li key={id}>
          <p>ID: {id}</p>
          <p>Content: {content}</p>
          <p>Author: {author}</p>
          <p>Claps: {claps}</p>
          <hr />
        </li>
      ))}
    </ul>
  </div>
);

export default Comments;
