import React from 'react';
import Meta from './Meta';
import Comments from './Comments';
import AddComment from './AddComment';
import '../../assets/styles/form.css';

const Discussion = ({
  currentQuote,
  currentQuote: {
    comments,
    id,
  },
}) => (
  <div className="discussion">
    <Meta currentQuote={currentQuote} />
    <Comments comments={comments} />
    <AddComment id={id} />
  </div>
);

export default Discussion;
