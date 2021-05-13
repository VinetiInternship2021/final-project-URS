import * as api from './authenticationApi';
import * as actions from '../reduxConstants';
import setAuthToken from '../../utils/setAuthToken';

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
        const response = await api.login(userData);

        localStorage.setItem('jwtToken', response.headers['authorization']);
        setAuthToken(response.headers['authorization']);

        dispatch(setCurrentUser(response.data));
        window.location.href = './dashboard';
    } catch (error) {
        dispatch(loginFail(error));
    }
};

// Log user out
export const logoutUser = () => async (dispatch) => {
    await api.logout();

    localStorage.removeItem('jwtToken');
    setAuthToken(false);

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
