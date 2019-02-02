import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Meta from './Meta';
import Comments from './Comments';
import AddComment from './AddComment';
import quotes from '../../services/mock';
import '../../assets/styles/form.css';

class Discussion extends Component {
  state = {
    quote: {},
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    const quote = this.getQuote(id)[0];
    this.setState({ quote });
  }

  getQuote = id => quotes.filter(quote => quote.id === parseInt(id));

  render() {
    const {
      state: { quote },
      props: { addComment },
    } = this;

    return (
      <div className="discussion">
        <Meta quote={quote} />
        <hr />
        <h2>Comments</h2>
        <AddComment quoteId={quote.id} addComment={addComment} />
        <Comments comments={quote.comments || []} />
      </div>
    );
  }
}

export default withRouter(Discussion);
