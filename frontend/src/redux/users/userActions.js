import * as api from './userApi';
import * as actions from '../reduxConstants';
import { UserModel } from '../../models/userModel';
import * as _ from 'lodash';

// Get users
export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.getUsers();
        dispatch({type: actions.getUsers, payload: _.map(data.data, user => new UserModel(user))});
    } catch (error) {
        console.log(error);
    }
};

// Get requesters
export const getRequesters = () => async (dispatch) => {
    try {
        const { data } = await api.getRequesters();
        dispatch({type: actions.getRequesters, payload: _.map(data.data, user => new UserModel(user))});
    } catch (error) {
        console.log(error);
    }
};

// Update user
export const updateUser = (id, updated) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(id, updated);
        dispatch({
            type: updated.active ? actions.updateUser : actions.verifyUser,
            payload: new UserModel(data.data)
        });

    } catch (error) {
        console.log(error);
    }
};

// Delete user
export const deleteUser = id => async (dispatch) => {
    try {
        await api.deleteUser(id);
        dispatch({type: actions.deleteUser, payload: id});
    } catch (error) {
        console.log(error);
    }
};
