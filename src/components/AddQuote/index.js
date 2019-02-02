import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';
import { capitalize } from 'lodash';

import AddQuote from './AddQuote';
import { checkForUrls } from '../../utils/strings';
import '../../assets/styles/form.css';

// ====== TODO: Display form in modal instead of route, add type and genre options list for mapping to DOM ======

const initialValues = {
  title: '',
  author: '',
  page: '',
  line: '',
  genre: '',
  type: '',
  content: '',
};

// 'Yup' is a simple object validation library that works great with Formik forms!
const addQuoteSchema = Yup.object().shape({
  title: Yup
    .string()
    .max(70, 'Too Long!')
    .typeError('Only normal characters allowed')
    .required('Required'),
  author: Yup
    .string()
    .max(70, 'Too Long!')
    .typeError('Only normal characters allowed')
    .required('Required'),
  page: Yup
    .number()
    .positive('Must be a positive number')
    .integer('Must be a whole number')
    .typeError('Must be a number'),
  line: Yup
    .number()
    .max(100, 'Too Long!')
    .positive('Must be a positive number')
    .integer('Must be a whole number')
    .typeError('Must be a number'),
  genre: Yup
    .string()
    .typeError('Only normal characters allowed')
    .required('Required'),
  type: Yup
    .string()
    .typeError('Only normal characters allowed')
    .required('Required'),
  content: Yup
    .string()
    .min(2, 'Too Short!')
    .max(200, 'Too Long!')
    .typeError('Only normal characters allowed')
    .required('Required'),
});

// Format values
const formatInput = ({
  title,
  author,
  page,
  line,
  genre,
  type,
  content,
}) => ({
  title: capitalize(title).trim(),
  author: capitalize(author).trim(),
  page,
  line,
  genre: capitalize(genre),
  type: capitalize(type),
  content: content.trim(),
});

const AddQuoteContainer = ({ addQuote, history }) => (
  <div className="add-quote-form">
    <Formik
      initialValues={initialValues}
      validationSchema={addQuoteSchema}
      validate={values => {
        let errors = {};
        if (checkForUrls(values.title)) {
          errors.title = 'No URLs';
        }
        if (checkForUrls(values.author)) {
          errors.author = 'No URLs';
        }
        if (checkForUrls(values.content)) {
          errors.content = 'No URLs';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        addQuote(formatInput(values));
        history.push('/');
      }}
    >
      {({ isSubmitting }) => <AddQuote isSubmitting={isSubmitting} />}
    </Formik>
  </div>
);

export default withRouter(AddQuoteContainer);
