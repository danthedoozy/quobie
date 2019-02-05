import React from 'react';

// Comments will have 'hover states' that reveal additional functionality
// Comments will also have a 'See More' clickable for long quotes

const Comment = ({ commentId, content, userId, claps, date }) => (
  <li className="comment">
    <p>ID: {commentId}</p>
    <p>Content: {content}</p>
    <p>User: {userId}</p>
    <p>Date: {date}</p>
    <p>
      <span role="img" aria-label="clap-emoji" className="clap-emoji">
        👏
      </span> {claps}
    </p>
  </li>
);

export default Comment;
