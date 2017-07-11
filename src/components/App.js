import React, { Component } from 'react';
import NavBar from './NavBar';
import Authentication from './Authentication';
import PersonalData from './PersonalData';
import SendData from './SendData';

export default class App extends Component {
  constructor() {
    super();
    //initial state
        this.stages = ['authData', 'personalData', 'sendData'];
        this.state = {
      formStage: "authData",
      formData: {
        authData: {
          username: '',
          email: '',
          password: ''
        },
        personalData: {
          name: '',
          date: '',
          additionalInfo: '',
        }
      }
    };
  }
  handleSubmit(data, stage) {
    console.log(stage, data);
    let newState = Object.assign({}, this.state);
    newState.formData[stage] = data;

    //change to the next state
    let nextIndex = this.stages.indexOf(stage) + 1;
    if(nextIndex < this.stages.length) {
      newState.formStage = this.stages[nextIndex];
    }

    this.setState(newState);
  }

  renderForms() {
    switch(this.state.formStage) {
        case 'authData':
            return <Authentication 
                    onSubmit={(value)=> { this.handleSubmit(value, 'authData') } } 
                    initialValues={ this.state.formData.authData } />;
        case 'personalData':
            return <PersonalData 
                    onSubmit={(value)=> { this.handleSubmit(value, 'personalData') } } 
                    initialValues={ this.state.formData.personalData }/>;
        case 'sendData':
            return <SendData 
            formData={ this.state.formData }/>;
        default:
            return '';
    }
  }
  
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <NavBar active={this.state.formStage}/>
        <main>
          { this.renderForms() }
        </main>
      </div>
    );
  }
}

