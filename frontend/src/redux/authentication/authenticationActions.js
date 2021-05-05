import * as api from './authenticationApi';

// Register user
export const registerUser = userData => async () => {
    try {
        await api.register(userData);
        window.location.href = './';
    } catch (error) {
        console.log(error.message);
    }
};

// Login user
export const loginUser = userData => async (dispatch) => {
    try {
        const { data } = await api.login(userData);
        dispatch(setCurrentUser(data));
    } catch (error) {
        console.log(error.message);
    }
};

// Set logged in user
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        payload: user
    };
};

// Log user out
export const logoutUser = () => async (dispatch) => {
    await api.logout();
    dispatch(setCurrentUser({}));
    window.location.href = './';
};
