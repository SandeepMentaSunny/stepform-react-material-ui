import React, { Component, Fragment } from 'react';
import { RaisedButton } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';

class Success extends Component{
    resetForm = (e) => {
        e.preventDefault();
        this.props.resetStep();
    }

    render(){
        return(
            <MuiThemeProvider>
                <Fragment>
                <h3>Thanks for Submitting Details</h3>
                <RaisedButton primary={true} label="Create New" onClick={this.resetForm}/>
                </Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;
