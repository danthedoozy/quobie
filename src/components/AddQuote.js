import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../assets/styles/form.css';

// Should this be a modal or a page? IDK! A little UX help, please?

class AddQuote extends Component {
  state = {
    title: 'Some title',
    page: 5,
    line: 30,
    author: 'Some author',
    genre: 'Some genre',
    type: 'Some type',
    content: 'Some content yo yo yo!',
  };

  onSubmit = () => {
    const {
      state,
      props: {
        history,
        addQuote,
      },
    } = this;
    addQuote(state);
    history.push('/');
  }

  render() {
    const {
      state,
      onSubmit,
    } = this;

    return (
      <div className="add-quote-form">
        Add a Quote Form
        <button type="button" className="button btn-primary" onClick={onSubmit}>Submit</button>
      </div>
    );
  }
}

export default withRouter(AddQuote);
