import * as api from './authenticationApi';
import * as actions from '../reduxConstants';
import setAuthToken from '../../utils/setAuthToken';

import { registrationFail, loginFail } from './authenticationErrorActions';
import { UserModel } from '../../models/userModel';

// Register user
export const registerUser = userData => async (dispatch) => {
    try {
        const response = await api.register(userData);
        setToken(response.headers['authorization']);

        const user = new UserModel(response.data?.data);
        if (user.role === UserModel.roles.student) {
            dispatch(setCurrentUser(new UserModel(response.data?.data)));
            return user;
        } else {
            dispatch(setCurrentUser({}));
        }
    } catch (error) {
        dispatch(registrationFail(error));
        throw error;
    }
};

// Login user
export const loginUser = userData => async (dispatch) => {
    try {
        const response = await api.login(userData);
        setToken(response.headers['authorization']);
        dispatch(setCurrentUser(new UserModel(response.data?.data)));
    } catch (error) {
        dispatch(loginFail(error));
        throw error;
    }
};

// Log user out
export const logoutUser = () => async (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);

    await api.logout();

    dispatch(setCurrentUser({}));
};

// Set logged in user
export const setCurrentUser = user => {
    return {
        type: actions.setCurrentUser,
        payload: user
    };
};

const setToken = token => {
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
};
