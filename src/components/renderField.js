import React from 'react';

//template of input fields
const renderField = ({ input, label, type, rows,id, meta: { touched, error, warning } }) => (
    <div className="form-group" style={ {marginBottom: '1em'} }>
        <label htmlFor={label}>{label}</label>
        <input {...input}
               placeholder={label}
               type={type}
               rows={rows}
               id={id}
               className="form-control"/>
        <span id="emailHelp"
              className="form-text text-muted"
              style={ {color: "red"} }>
        {touched && ((error && <span>* {error}</span>))}
    </span>
    </div>
);


export default renderField;
