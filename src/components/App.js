import React, { Component } from 'react';

import Nav from './Nav';
import Discover from './Discover';
import Footer from './Footer';

import '../assets/styles/App.css';

class App extends Component {
  // This state is theoretical (we will likely add some state management)
  state = {
    user: {},
    currentQuote: null, //Quote ID
    clapCount: 0, // Figure out a way to allow only a certain number of claps per quote ID
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Discover />
        <Footer />
      </div>
    );
  }
}

export default App;
