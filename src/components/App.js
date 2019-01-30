import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Nav';
import Discover from './Discover';
import AddQuote from './AddQuote';
import Discussion from './Discussion';
import Footer from './Footer';
import quotes from '../services/mock';
import mockQuote from '../services/mockQuote';
import '../assets/styles/App.css';

class App extends Component {
  // This state is theoretical (we will likely add some state management)
  state = {
    user: {},
    currentQuote: mockQuote,
    clapCount: 0, // Figure out a way to allow only a certain number of claps per quote ID
  };

  // Add a quote
  addQuote = (newQuote) => {
    console.log(newQuote);
  }

  // Pull active quote into state
  selectQuote = id => {
    const currentQuote = quotes.filter(quote => quote.id === id);
    this.setState({ currentQuote });
  }

  render() {
    const {
      state: {
        user,
        currentQuote,
        clapCount,
      },
      addQuote,
      selectQuote,
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
                  render={() => <Discover quotes={quotes} selectQuote={selectQuote}/>}
                />
                <Route
                  path="/add-quote"
                  render={() => <AddQuote addQuote={addQuote} />}
                />
                <Route
                  path="/discussion"
                  render={() => <Discussion currentQuote={currentQuote} />}
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
