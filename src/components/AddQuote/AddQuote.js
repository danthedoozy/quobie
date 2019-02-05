import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import { capitalize } from 'lodash';

import { genres, types } from './categories';
import '../../assets/styles/form.css';

const AddQuote = ({ isSubmitting }) => (
  <div>
    <h1>Share a quote!</h1>
    <Form>
      <div className="form-fields">
        <div className="form-field">
          Title:
          <Field type="text" name="title" />
          <ErrorMessage name="title" component="div" className="error-message" />
        </div>
        <div className="form-field">
          Author:
          <Field type="text" name="author" />
          <ErrorMessage name="author" component="div" className="error-message" />
        </div>
        <div className="form-field">
          Page:
          <Field type="text" name="page" />
          <ErrorMessage name="page" component="div" className="error-message" />
        </div>
        <div className="form-field">
          Line:
          <Field type="text" name="line" />
          <ErrorMessage name="line" component="div" className="error-message" />
        </div>
        <div className="form-field">
          Genre:
          <Field component="select" name="genre">
            <option disabled value="">——</option>
            {genres.map(genre => <option value={genre} key={genre}>{capitalize(genre)}</option>)}
          </Field>
          <ErrorMessage name="genre" component="div" className="error-message" />
        </div>
        <div className="form-field">
          Type:
          <Field component="select" name="type">
            <option disabled value="">——</option>
            {types.map(type => <option value={type} key={type}>{capitalize(type)}</option>)}
          </Field>
          <ErrorMessage name="type" component="div" className="error-message" />
        </div>
        <div className="form-field">
          Content:
          <Field type="text" name="content" />
          <ErrorMessage name="content" component="div" className="error-message" />
        </div>
      </div>
      <button type="submit" disabled={isSubmitting} className="button btn-primary">
        Submit
      </button>
    </Form>
  </div>
);

export default AddQuote;
