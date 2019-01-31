import React from 'react';

import Comment from './Comment';

// Comments will have 'hover states' that reveal additional functionality
// Comments could also have a 'See More' clickable for long quotes

const Comments = ({ comments }) => (
  <ul>
    {comments.map(({ commentId, content, author, claps}) => (
      <Comment
        key={commentId}
        commentId={commentId}
        content={content}
        author={author}
        claps={claps}
      />
    ))}
  </ul>
);

export default Comments;
