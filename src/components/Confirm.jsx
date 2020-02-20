import React, { Component, Fragment } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { List, ListItem, AppBar, RaisedButton } from 'material-ui';

class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        const { firstName, lastName, email, occupation, city, bio } = values;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title={'Confirm your Details ' + firstName + ' ' + lastName} />
                    <List>
                        <ListItem>First Name: {firstName}</ListItem>
                        <ListItem>Last Name: {lastName}</ListItem>
                        <ListItem>Email Address: {email}</ListItem>
                        <ListItem>Occupation: {occupation}</ListItem>
                        <ListItem>City: {city}</ListItem>
                        <ListItem>Bio: {bio}</ListItem>
                    </List>
                    <RaisedButton label="Back" primary={false} onClick={this.back} />
                    <RaisedButton label="Submit" onClick={this.continue} primary={true} />
                </Fragment>
            </MuiThemeProvider>);
    }
}

export default Confirm;