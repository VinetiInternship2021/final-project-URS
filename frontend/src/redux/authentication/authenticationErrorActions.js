import * as actions from '../reduxConstants';

export const registrationFail = error => {
    return {
        type: actions.registrationFailure,
        payload: error
    };
};

export const loginFail = error => {
    return {
        type: actions.loginFailure,
        payload: error
    };
};
