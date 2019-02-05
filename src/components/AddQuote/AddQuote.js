import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import { capitalize } from 'lodash';

import { genres, types } from './categories';
import '../../assets/styles/forms.css';

const AddQuote = ({ isSubmitting }) => (
  <div>
    <h1>Share a quote!</h1>
    <Form>
      <div className="form-fields">
        <div className="form-field">
          <div className="form-field-inner">
            Title:
            <Field type="text" name="title" />
          </div>
          <ErrorMessage name="title" component="div" className="error-message" />
        </div>
        <div className="form-field">
          <div className="form-field-inner">
            Author:
            <Field type="text" name="author" />
          </div>
          <ErrorMessage name="author" component="div" className="error-message" />
        </div>
        <div className="form-field">
          <div className="form-field-inner">
            Page:
            <Field type="text" name="page" />
          </div>
          <ErrorMessage name="page" component="div" className="error-message" />
        </div>
        <div className="form-field">
          <div className="form-field-inner">
            Line:
            <Field type="text" name="line" />
          </div>
          <ErrorMessage name="line" component="div" className="error-message" />
        </div>
        <div className="form-field">
          <div className="form-field-inner">
            Genre:
            <Field component="select" name="genre">
              <option disabled value="">——</option>
              {genres.map(genre => <option value={genre} key={genre}>{capitalize(genre)}</option>)}
            </Field>
          </div>
          <ErrorMessage name="genre" component="div" className="error-message" />
        </div>
        <div className="form-field">
          <div className="form-field-inner">
            Type:
            <Field component="select" name="type">
              <option disabled value="">——</option>
              {types.map(type => <option value={type} key={type}>{capitalize(type)}</option>)}
            </Field>
          </div>
          <ErrorMessage name="type" component="div" className="error-message" />
        </div>
        <div className="form-field">
          <div className="form-field-inner">
            Content:
            <Field type="text" name="content" component="textarea" className="content-input" />
          </div>
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
