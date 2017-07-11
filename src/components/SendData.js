import React from 'react';

const SendData = (props) => {
        return (
            <div>
               <h1>Send Data</h1>
               <b>Username: </b> {props.formData.authData.username} <br />
               <b>Email: </b> {props.formData.authData.email} <br />
               <b>Password: </b> {props.formData.authData.password} <br />
               <b>Name: </b> {props.formData.personalData.name} <br />
               <b>Date: </b> {props.formData.personalData.date} <br />
               <b>Additional Information:</b> {props.formData.personalData.additionalInfo} <br />
               <div className="well col-xs-12" >
                    <button className="btn btn-success pull-right" >Next</button>
                </div>
            </div>
            
        );
};

export default SendData;
