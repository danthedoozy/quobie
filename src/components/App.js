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

  // Clap for quote
  clapQuote = quoteId => {
    // API call that adds a clap to a quote
    console.log(`${this.state.user.id} has clapped for quote ${quoteId}`);
  };

  // Report quote
  reportQuote = quoteId => {
    // API call that adds a flag to a quote
    console.log(`${this.state.user.id} has reported quote ${quoteId}`);
  };

  // Edit quote
  editQuote = (userId, quoteId) => {
    // API call that edits quote if userId matches
    if (this.state.user.id === userId) {
      console.log(`${quoteId} has been edited`);
    }
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

  // Clap for comment
  clapComment = commentId => {
    // API call that adds a clap to a comment
    console.log(`${this.state.user.id} has clapped for comment ${commentId}`);
  }

  // Report comment
  reportComment = commentId => {
    // API call that adds a flag to a comment
    console.log(`${this.state.user.id} has reported comment ${commentId}`);
  };

  // Edit comment
  editComment = (userId, commentId) => {
    // API call that edits comment if userId matches
    if (this.state.user.id === userId) {
      console.log(`${commentId} has been edited`);
    }
  }

  // Delete comment
  deleteComment = (userId, commentId) => {
    // API call that deletes comment if userId matches
    if (this.state.user.id === userId) {
      console.log(`${commentId} has been deleted`);
    }
  }

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
