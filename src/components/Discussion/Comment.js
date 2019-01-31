import React from 'react';

// Comments will have 'hover states' that reveal additional functionality
// Comments will also have a 'See More' clickable for long quotes

const Comment = ({ commentId, content, author, claps }) => (
  <li>
    <p>ID: {commentId}</p>
    <p>Content: {content}</p>
    <p>Author: {author}</p>
    <p>Claps: {claps}</p>
    <hr />
  </li>
);

export default Comment;
