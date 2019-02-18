import React from 'react';

import Clap from '../mechanics/Clap';
import Report from '../mechanics/Report';

// Comments will have 'hover states' that reveal additional functionality
// Comments will also have a 'See More' clickable for long quotes

const Comment = ({ commentId, content, userId, claps, date }) => (
  <li className="comment card">
    <div className="columns is-spaced-between">
      <div className="column">
        <p>{content}</p>
        <p className="small">Submitted by {userId}</p>
      </div>
      <div className="column">
        <Clap claps={claps} />
        <Report id={commentId} />
      </div>
    </div>
  </li>
);

export default Comment;
