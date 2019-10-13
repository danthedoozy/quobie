import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { replace } from 'lodash';

import AddQuote from './AddQuote';
import { checkForUrls, upperFirst } from '../../utils/strings';
import '../../styles/forms.css';

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
  content: Yup
    .string()
    .min(2, 'Too short!')
    .max(200, 'Too long!')
    .typeError('Only normal characters allowed')
    .required('Required'),
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
});

// Format input
const formatInput = ({
  content,
  title,
  author,
  page,
  line,
  genre,
  type,
}) => ({
  content: replace(content.trim(), /"/g, "'"),
  title: replace(upperFirst(title).trim(), /"/g, "'"),
  author: replace(upperFirst(author).trim(), /"/g, "'"),
  page: page ? parseInt(page) : '',
  line: line ? parseInt(line) : '',
  genre: upperFirst(genre),
  type: upperFirst(type),
  flags: 0,
  hidden: false,
});

const AddQuoteContainer = ({ addQuote, closeModal }) => (
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
        if (!values.page && values.line) {
          errors.page = 'Needs a page number';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        addQuote(formatInput(values));
        alert('Your quote has been added!');
        closeModal();
      }}
    >
      {({ isSubmitting }) => <AddQuote isSubmitting={isSubmitting} />}
    </Formik>
  </div>
);

export default AddQuoteContainer;
