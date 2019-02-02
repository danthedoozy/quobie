import React from 'react';

import Comment from './Comment';

// Comments will have 'hover states' that reveal additional functionality
// Comments could also have a 'See More' clickable for long comments

const Comments = ({ comments }) => (
  <ul>
    {comments.map(({ commentId, content, userId, claps}) => (
      <Comment
        key={commentId}
        commentId={commentId}
        content={content}
        userId={userId}
        claps={claps}
      />
    ))}
  </ul>
);

export default Comments;
