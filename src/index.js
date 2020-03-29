import React from 'react';
import ReactDOM from 'react-dom';
import WrappedApp from './App';
import {Provider} from "react-redux"
import {createStore} from "redux";

const defaultState = {
    firstName: "",
    lastName: ""
};

const CHANGE_FIRST_NAME = "CHANGE_FIRST_NAME";

const CHANGE_LAST_NAME = "CHANGE_LAST_NAME";

function reducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_FIRST_NAME:
            return {...state, firstName: action.data};
        case CHANGE_LAST_NAME:
            return {...state, lastName: action.data};
        default:
            return state;
    }
}

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <WrappedApp/>
    </Provider>,
    document.getElementById('root')
);
