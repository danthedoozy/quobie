import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { checkForUrls } from '../../utils/strings';
import '../../styles/forms.css';

const initialValues = {
  content: '',
};

// 'Yup' is a simple object validation library that works great with Formik forms!
const addCommentSchema = Yup.object().shape({
  content: Yup
    .string()
    .max(1000, 'Too long!')
    .typeError('Only normal characters allowed')
    .required('You need to type something!'),
});

// Format values
const formatInput = ({
  content,
}) => ({
  content: content.trim(),
  claps: 0,
  flags: 0,
  hidden: false,
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
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        addComment(formatInput(values), quoteId);
        alert('Your comment has been added!'); // Change this to a modal alert at some point...
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <div className="mb3 text-align-left">
          <h3>Leave a comment</h3>
          <Form>
            <div className="pb1">
              <Field
                type="text"
                name="content"
                component="textarea"
                className="add-comment-textarea"
                placeholder="Share your thoughts and impressions..."
              />
            </div>
            <ErrorMessage name="content" component="div" className="error-message pb1" />
            <button type="submit" disabled={isSubmitting} className="button btn-primary pb1">
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  </div>
);

export default AddComment;
