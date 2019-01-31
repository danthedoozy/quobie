import React from 'react';

import Comment from './Comment';

// Comments will have 'hover states' that reveal additional functionality
// Comments will also have a 'See More' clickable for long quotes

const Comments = ({ comments }) => (
  <div>
    <h1>Comments:</h1>
    <hr />
    {console.log(comments)}
  </div>
);

export default Comments;
