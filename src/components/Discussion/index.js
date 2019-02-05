import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Meta from './Meta';
import Comments from './Comments';
import AddComment from './AddComment';
import CommentsHeader from './CommentsHeader';
import quotes from '../../services/mock';
import '../../assets/styles/components/Discussion.css';
import '../../assets/styles/forms.css';

class Discussion extends Component {
  state = {
    quote: {},
    sort: 'popular',
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    const quote = this.getQuote(id)[0];
    this.setState({ quote });
  }

  getQuote = id => quotes.filter(quote => quote.id === parseInt(id));

  handleSort = ({ target: { value: sort }}) => {
    this.setState({ sort });
  };

  render() {
    const {
      state: { quote, sort },
      props: { addComment },
      handleSort,
    } = this;

    return (
      <div className="discussion">
        <div className="discussion-inner">
          <Meta quote={quote} />
          <div className="discussion-comments">
            <AddComment quoteId={quote.id} addComment={addComment} />
            <CommentsHeader handleSort={handleSort} />
            <Comments comments={quote.comments || []} sort={sort} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Discussion);
