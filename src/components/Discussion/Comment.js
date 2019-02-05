import React from 'react';

import Clap from '../mechanics/Clap';
import Report from '../mechanics/Report';

// Comments will have 'hover states' that reveal additional functionality
// Comments will also have a 'See More' clickable for long quotes

const Comment = ({ commentId, content, userId, claps, date }) => (
  <li className="comment">
    <p>ID: {commentId}</p>
    <p>Content: {content}</p>
    <p>User: {userId}</p>
    <p>Date: {date}</p>
    <Clap claps={claps} />
    <Report id={commentId} />
  </li>
);

export default Comment;
