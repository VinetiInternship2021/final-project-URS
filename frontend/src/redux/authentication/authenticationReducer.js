import * as actions from '../reduxConstants';

const initialState = {
    user: {},
    registerError: null,
    loginError: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.setCurrentUser:
            return {
                ...state,
                user: action.payload,
                registerError: null,
                loginError: null
            };
        case actions.registrationFailure:
            return {
                ...state,
                user: {},
                registerError: action.payload
            };
        case actions.loginFailure:
            return {
                ...state,
                user: {},
                loginError: action.payload
            };
        default:
            return state;
    }
};
