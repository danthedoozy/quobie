import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../assets/styles/form.css';

// USE FORMIK
// Should this be a modal or a page? IDK! A little UX help, please?

class AddQuote extends Component {
  state = {
    title: '',
    author: '',
    page: null,
    line: null,
    genre: '',
    type: '',
    content: '',
  };

  handleChange = ({
    target: {
      name,
      value,
    },
  }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    const {
      state,
      props: {
        addQuote,
        history,
      },
    } = this;
    e.preventDefault();
    addQuote(state);
    history.push('/');
  }

  render() {
    const {
      handleChange,
      handleSubmit,
    } = this;

    return (
      <div className="add-quote-form">
        <form>
          <div className="form-fields">
            <div className="form-field">
              Title:
              <input type="text" name="title" defaultValue="" onChange={handleChange} />
            </div>
            <div className="form-field">
              Author:
              <input type="text" name="author" defaultValue="" onChange={handleChange} />
            </div>
            <div className="form-field">
              Location:
              <input type="text" name="page" defaultValue="" onChange={handleChange} placeholder="Page" />
              <br />
              <input type="text" name="line" defaultValue="" onChange={handleChange} placeholder="Line" />
            </div>
            <div className="form-field">
              Genre:
              <input type="text" name="genre" defaultValue="" onChange={handleChange} />
            </div>
            <div className="form-field">
              Type:
              <input type="text" name="type" defaultValue="" onChange={handleChange} />
            </div>
            <div className="form-field">
              Content:
              <input type="text" name="content" defaultValue="" onChange={handleChange} />
            </div>
          </div>
          <input type="submit" className="button btn-primary button-balanced-padding" value="Submit" onClick={handleSubmit} />
        </form>
      </div>
    );
  }
}

export default withRouter(AddQuote);
