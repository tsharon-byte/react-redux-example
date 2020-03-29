import {createStore} from "redux";

const defaultState = {
    firstName: "Tatyana",
    lastName: "Churkina"
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

let actionChangeFirstName = {
    type: CHANGE_FIRST_NAME,
    data: "Olga"
};

let actionChangeLastName = {
    type: CHANGE_LAST_NAME,
    data: "Sharonova"
};

let store = createStore(reducer);

console.log(store.getState());
store.dispatch(actionChangeFirstName);
console.log(store.getState());
store.dispatch(actionChangeLastName);
console.log(store.getState());