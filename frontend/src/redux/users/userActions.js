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
