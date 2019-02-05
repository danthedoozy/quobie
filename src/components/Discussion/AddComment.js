import React, { Fragment } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { checkForUrls } from '../../utils/strings';
import '../../assets/styles/form.css';

const initialValues = {
  content: '',
};

// 'Yup' is a simple object validation library that works great with Formik forms!
const addCommentSchema = Yup.object().shape({
  content: Yup
    .string()
    .min(5, 'Too short!')
    .max(1000, 'Too long!')
    .typeError('Only normal characters allowed')
    .required('Required'),
});

// Format values
const formatInput = ({
  content,
}) => ({
  content: content.trim(),
});

const AddComment = ({ quoteId, addComment }) => (
  <div className="add-comment-form">
    <Formik
      initialValues={initialValues}
      validationSchema={addCommentSchema}
      validate={values => {
        let errors = {};
        if (checkForUrls(values.content)) {
          errors.content = 'No URLs';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        addComment(formatInput(values), quoteId);
        alert('Your comment has been added!'); // Change this to a modal alert at some point...
      }}
    >
      {({ isSubmitting }) => (
        <Fragment>
          <h3>Leave a comment</h3>
          <Form>
            <Field
              type="text"
              name="content"
              placeholder="What are your thoughts on this quote?"
            />
            <ErrorMessage name="content" component="div" className="error-message" />
            <button type="submit" disabled={isSubmitting} className="button btn-primary">
              Submit
            </button>
            <hr />
          </Form>
        </Fragment>
      )}
    </Formik>
  </div>
);

export default AddComment;
