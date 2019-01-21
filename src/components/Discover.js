import React from 'react';

import Quotes from './quotes/Quotes';

const DummyQuotes = [
  {
    title: 'book',
    page: '32',
    line: '1',
    author: 'Joni Driskill',
    genre: 'Sci-fi',
    type: 'Motivational',
    content: 'The grass is greener on the other side.',
  },
  {
    title: 'book',
    page: '498',
    line: '51',
    author: 'Joni Driskill',
    genre: 'Sci-fi',
    type: 'Motivational',
    content: 'The grass is greener on the other side.',
  },
  {
    title: 'book',
    page: '868',
    line: '2',
    author: 'Joni Driskill',
    genre: 'Sci-fi',
    type: 'Motivational',
    content: 'The grass is greener on the other side.',
  },
];

const Discover = () => (
  <div className="discover">
    Discover & discuss snippets of great literature.
    <Quotes quotes={DummyQuotes} />
  </div>
);

export default Discover;
