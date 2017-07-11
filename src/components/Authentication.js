import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import validate from './validate';

const AuthenticationForm = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
        <Field name="username" type="text" component={renderField} label="Username"/>
        <Field name="email" type="email" component={renderField} label="Email"/>
        <Field name="password" type="password" component={renderField} label="Password"/>
        <Field name="confirmPassword" type="password" component={renderField} label="Confirm Password"/>
      <div className="well col-xs-12">
        <button className="btn btn-success pull-right" type="submit" disabled={submitting}>Next</button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'AuthenticationForm',
  validate
})(AuthenticationForm);
