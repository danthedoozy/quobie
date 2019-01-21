import React from 'react';

import Quotes from './quotes/Quotes';
import '../assets/styles/Discover.css';

const DummyQuotes = [
  {
    title: "The Hefalump's Tale",
    page: '32',
    line: '1',
    author: 'Joni E. Driskill',
    genre: 'Sci-fi',
    type: 'Motivational',
    content: 'The grass is greener on the other side.',
    claps: 23,
  },
  {
    title: "Righteous Bigots",
    page: '498',
    line: '51',
    author: 'Daniel K. Driskill',
    genre: 'Non-fiction',
    type: 'Inspirational',
    content: "Don't give monkeys machine guns.",
    claps: 8,
  },
  {
    title: "How to Train Your Dragon",
    page: '868',
    line: '2',
    author: 'James C. Driskill',
    genre: 'Fantasy',
    type: 'Prose',
    content: 'Long was the night...',
    claps: 7,
  },
];

const Discover = () => (
  <section className="discover">
    <p className="discover-headline">Discover & discuss snippets of great literature.</p>
    <Quotes quotes={DummyQuotes} />
  </section>
);

export default Discover;
