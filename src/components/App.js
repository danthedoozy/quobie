import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Nav';
import Discover from './Discover';
import AddQuote from './features/AddQuote';
import Discussion from './Discussion';
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
    const {
      state: {
        user,
        currentQuote,
        clapCount,
      },
    } = this;

    return (
      <div className="App">
        <Router>
          <Fragment>
            <Nav />
              <Switch>
                <Route
                  exact
                  path="/"
                  component={Discover}
                />
                <Route
                  path="/add-quote"
                  component={AddQuote}
                />
                <Route
                  path="/discussion"
                  component={Discussion}
                />
              </Switch>
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
