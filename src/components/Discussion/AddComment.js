import React from 'react';

const AddComment = ({ id }) => (
  <div>
    <p>Add comment to quote with id {id}</p>
    <input type="text" /><button type="submit">Submit</button>
    <hr />
  </div>
);

export default AddComment;
