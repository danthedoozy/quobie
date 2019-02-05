import React from 'react';

const CommentsHeader = ({ handleSort }) => (
  <div className="columns is-spaced-between align-items-center">
    <div className="column">
      <h3 className="text-align-left">Comments</h3>
    </div>
    <div className="column">
      <select className="sort-dropdown" onChange={handleSort}>
        <option value="popular">Popular</option>
        <option value="new">New</option>
      </select>
    </div>
  </div>
);

export default CommentsHeader;
