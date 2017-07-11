import React from 'react';

const SendData = (props) => {
        
        return (
            //view of user's submitted data through props (which is properties passed from other components)
            <div>
               <h2>Send Data</h2>
               <b>Username: </b> {props.formData.authData.username} <br />
               <b>Email: </b> {props.formData.authData.email} <br />
               <b>Password: </b> {props.formData.authData.password} <br />
               <b>Name: </b> {props.formData.personalData.name} <br />
               <b>Date: </b> {props.formData.personalData.date} <br />
               <b>Additional Information:</b> {props.formData.personalData.additionalInfo} <br />
              </div>
            
        );
};

export default SendData;
