import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';

import '../../assets/styles/form.css';

// ====== TODO: Lengthen 'content' box and style inputs in CSS ======

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
            <option value="fantasy">Fantasy</option>
            <option value="fiction">Fiction</option>
            <option value="sci-fi">Sci-fi</option>
          </Field>
          <ErrorMessage name="genre" component="div" className="error-message" />
        </div>
        <div className="form-field">
          Type:
          <Field component="select" name="type">
            <option disabled value="">——</option>
            <option value="motivational">Motivational</option>
            <option value="inspirational">Inspirational</option>
            <option value="prose">Prose</option>
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
