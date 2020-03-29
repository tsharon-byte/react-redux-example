import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux"
import './App.css';

const CHANGE_FIRST_NAME = "CHANGE_FIRST_NAME";

const CHANGE_LAST_NAME = "CHANGE_LAST_NAME";

function App(props) {
    console.log(props);
    let {firstName, lastName, firstNameChange, lastNameChange} = props;
    return (
        <div className="App">
            <div>
                <input type="text"
                       value={firstName}
                       placeholder="First name"
                       onChange={(event) => firstNameChange(event.target.value)}/>
            </div>
            <div>
                <input type="text"
                       value={lastName}
                       placeholder="Last name"
                       onChange={(event) => lastNameChange(event.target.value)}
            />
            </div>
            <div>{`Your name: ${firstName} ${lastName}`}</div>
        </div>
    );
}

function changeFirstName(firstName) {
    return {
        type: CHANGE_FIRST_NAME,
        data: firstName
    };
}

function changeLastName(lastName) {
    return {
        type: CHANGE_LAST_NAME,
        data: lastName
    };
}

function putDispatchToHandlers(dispatch) {
    return {
        firstNameChange: bindActionCreators(changeFirstName, dispatch),
        lastNameChange: bindActionCreators(changeLastName, dispatch)
    };
}

function putStateToProps(state) {
    return {
        firstName: state.firstName,
        lastName: state.lastName
    }
}

const WrappedApp = connect(putStateToProps, putDispatchToHandlers)(App);
export default WrappedApp;
