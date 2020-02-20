import React from 'react';

import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonlDetails';
import Confirm from './Confirm';
import Success from './Success';
class UserForm extends React.Component{
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = (input) => e => {
        this.setState({
            [input]: e.target.value
        })
    }
    
    resetStep = () => {
        this.setState({
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: ''
        });
    }
    render(){
        const { step, firstName, lastName, email, occupation, city, bio } = this.state;
        const values = {firstName, lastName, email, occupation, city, bio};
        switch(step){
            case 1: 
                return(
                    <FormUserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
                );
            case 2: 
                return(<FormPersonalDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} prevStep={this.prevStep}/>);
            case 3:
                return (<Confirm values={values} nextStep={this.nextStep} prevStep={this.prevStep}/>)
            case 4:
                return (<Success values={values} resetStep={this.resetStep}/>)
        }
    }
}

export default UserForm;