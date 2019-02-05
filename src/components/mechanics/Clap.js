import React from 'react';

const Clap = ({ claps }) => (
  <p className="small">
    <span role="img" aria-label="clap-emoji" className="clap-emoji">
      👏
    </span> {claps}
  </p>
);

export default Clap;
