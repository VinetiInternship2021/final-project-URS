import * as api from './roomsApi';
import * as actions from '../reduxConstants';
import { RoomModel } from '../../models/roomModel';
import * as _ from 'lodash';

// Get rooms
export const getRooms = (type) => async (dispatch) => {
    try {
        const { data } = await api.getRooms(type);
        dispatch({type: actions.getRooms, payload: _.map(data.data, room => new RoomModel(room))});
    } catch (error) {
        console.log(error);
    }
};

// Create room
export const createRoom = (room) => async (dispatch) => {
    try {
        const { data } = await api.createRoom(RoomModel.prototype.toBackend(room));
        dispatch({type: actions.createRoom, payload: new RoomModel(data.data)});
    } catch (error) {
        console.log(error);
    }
};

// Update room
export const updateRoom = (id, room) => async (dispatch) => {
    try {
        const { data } = await api.updateRoom(id, RoomModel.prototype.toBackend(room));
        dispatch({type: actions.updateRoom, payload: new RoomModel(data.data)});

    } catch (error) {
        console.log(error);
    }
};

// Delete room
export const deleteRoom = (id) => async (dispatch) => {
    try {
        await api.deleteRoom(id);
        dispatch({type: actions.deleteRoom, payload: id});
    } catch (error) {
        console.log(error);
    }
};

