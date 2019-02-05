import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Nav';
import Discover from './Discover';
import AddQuote from './AddQuote';
import Discussion from './Discussion';
import Footer from './Footer';
import quotes from '../services/mock';
import '../assets/styles/components/App.css';

class App extends Component {
  // This state is hypothetical (we will likely add some state management)
  state = {
    user: {
      id: 25,
      username: 'Daniel Driskill',
    },
    clapCount: 0, // Figure out a way to allow only a certain number of claps per quote ID
  };

  // Add a quote
  addQuote = newQuote => {
    newQuote.userId = this.state.user.id;
    newQuote.flags = 0;
    newQuote.hidden = false;
    // API call that adds a quote to the database -- console log data for now
    console.log(newQuote);
  }

  // Add a comment
  addComment = (newComment, quoteId) => {
    newComment.userId = this.state.user.id;
    newComment.quoteId = quoteId;
    newComment.claps = 0;
    newComment.flags = 0;
    newComment.hidden = false;
    // API call that adds a comment to the database -- console log data for now
    console.log(newComment);
  }

  // Clap for quote
  quoteClap = (quoteId, userId) => {
    // API call that adds a clap to a quote
    console.log(`${userId} has clapped for quote ${quoteId}`);
  };

  // Clap for comment
  commentClap = (commentId, userId) => {
    // API call that adds a clap to a comment
    console.log(`${userId} has clapped for comment ${commentId}`);
  }

  // Report quote
  reportQuote = (quoteId, userId) => {
    // API call that adds a flag to a quote
    console.log(`${userId} has reported quote ${quoteId}`);
  };

  // Report comment
  reportComment = (commentId, userId) => {
    // API call that adds a flag to a comment
    console.log(`${userId} has reported comment ${commentId}`);
  };

  render() {
    const { addQuote, addComment } = this;
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Nav />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Discover quotes={quotes} />}
              />
              <Route
                path="/add-quote"
                render={() => <AddQuote addQuote={addQuote} />}
              />
              <Route
                path="/discussion/:id"
                render={() => <Discussion addComment={addComment} />}
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
