import React from 'react';

import Comment from './Comment';

// Comments will have 'hover states' that reveal additional functionality
// Comments could also have a 'See More' clickable for long comments

const sortComments = (sort, comments) => {
  switch (sort) {
    case 'new':
      // Will be rewritten after implementing Moment on dates/times
      return comments.sort(({ date: a }, { date: b }) => b - a);
    default:
      return comments.sort(({ claps: a }, { claps: b }) => b - a);
  }
};

const Comments = ({ comments, sort }) => (
  <ul>
    {sortComments(sort, comments)
      .map(({ commentId, content, userId, claps, date }) => (
        <Comment
          key={commentId}
          commentId={commentId}
          content={content}
          userId={userId}
          claps={claps}
          date={date}
        />
      ))
    }
  </ul>
);

export default Comments;
