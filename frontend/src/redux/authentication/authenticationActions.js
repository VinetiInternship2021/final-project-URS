import * as api from './authenticationApi';
import * as actions from '../reduxConstants';

import { registrationFail, loginFail } from './authenticationErrorActions';

// Register user
export const registerUser = userData => async (dispatch) => {
    try {
        await api.register(userData);
        dispatch(setCurrentUser({}));
        window.location.href = './';
    } catch (error) {
        dispatch(registrationFail(error));
    }
};

// Login user
export const loginUser = userData => async (dispatch) => {
    try {
        const { data } = await api.login(userData);
        dispatch(setCurrentUser(data));
        window.location.href = './dashboard';
    } catch (error) {
        dispatch(loginFail(error));
    }
};

// Log user out
export const logoutUser = () => async (dispatch) => {
    await api.logout();
    dispatch(setCurrentUser({}));
    window.location.href = './';
};

// Set logged in user
export const setCurrentUser = user => {
    return {
        type: actions.setCurrentUser,
        payload: user
    };
};
