import React, { Component } from 'react';

import Nav from './Nav';
import Discover from './Discover';
import Footer from './Footer';

import '../assets/styles/App.css';

class App extends Component {
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
