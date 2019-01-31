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

  // Not working
  getQuote = id => quotes.filter(quote => quote.id === parseInt(id));

  render() {
    const {
      quote,
    } = this.state;

    return (
      <div className="discussion">
        <Meta quote={quote} />
        <Comments comments={quote.comments || []} />
        <AddComment id={quote.id} />
      </div>
    );
  }
}

export default withRouter(Discussion);
