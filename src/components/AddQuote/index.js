import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';
import { capitalize, replace } from 'lodash';

import AddQuote from './AddQuote';
import { checkForUrls } from '../../utils/strings';
import '../../assets/styles/form.css';

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
    .max(70, 'Too long!')
    .typeError('Only normal characters allowed')
    .required('Required'),
  author: Yup
    .string()
    .min(2, 'Too short!')
    .max(70, 'Too long!')
    .typeError('Only normal characters allowed')
    .required('Required'),
  page: Yup
    .number()
    .positive('Must be a positive number')
    .integer('Must be a whole number')
    .typeError('Must be a number'),
  line: Yup
    .number()
    .max(100, 'Too long!')
    .positive('Must be a positive number')
    .integer('Must be a whole number')
    .typeError('Must be a number'),
  genre: Yup
    .string()
    .typeError('Only normal characters allowed')
    .required('Required'),
  type: Yup
    .string()
    .typeError('Only normal characters allowed'),
  content: Yup
    .string()
    .min(2, 'Too short!')
    .max(200, 'Too long!')
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
  title: replace(capitalize(title).trim(), /"/g, "'"),
  author: replace(capitalize(author).trim(), /"/g, ""),
  page: parseInt(page),
  line: parseInt(line),
  genre: capitalize(genre),
  type: capitalize(type),
  content: replace(content.trim(), /"/g, "'"),
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
        alert('Your quote has been added!');
        history.push('/');
      }}
    >
      {({ isSubmitting }) => <AddQuote isSubmitting={isSubmitting} />}
    </Formik>
  </div>
);

export default withRouter(AddQuoteContainer);
