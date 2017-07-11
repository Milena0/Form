import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
/*import textArea from './textArea';*/
import validate from './validate';

const personalDataForm =(props)=> {

        const { handleSubmit, submitting } = props;

        return (
            //rendering user's inputs on submit
            <form onSubmit={(e) => {e.preventDefault()}}>
                <Field name="name" type="text" component={renderField} label="Name"/>
                <Field name="date" type="date" component={renderField} label="Date"/>
                <Field name="additionalInfo" type="text"  component={renderField}
                       id="comment" rows="5" label="Additional Information"/>
                <div className="col-xs-12 well">
                    <button
                        className="btn btn-success pull-right"
                        type="submit"
                        onClick={handleSubmit}
                        disabled={submitting}>Next</button>
                </div>
            </form>
        )
};


export default reduxForm({
  form: 'AuthenticationForm',
  validate
})(personalDataForm);

