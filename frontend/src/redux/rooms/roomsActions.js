import * as api from './roomsApi';
import * as actions from '../reduxConstants';
import { RoomModel } from '../../models/roomModel';
import * as _ from 'lodash';
import { AvailabilityModel } from '../../models/availabilityModel';

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
        const updated = new RoomModel(data.data);
        dispatch({type: actions.createRoom, payload: updated });
        return updated;
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

// Get rooms
export const getRoomById = (id) => async (dispatch) => {
    try {
        const { data } = await api.getRoomById(id);
        const room = new RoomModel(data.data, data.included);
        dispatch({type: actions.getRoomById, payload: room});
        return room;
    } catch (error) {
        console.log(error);
    }
};

// Create availability
export const createAvailability = (roomId, availability) => async (dispatch) => {
    try {
        const { data } = await api.createAvailability(roomId, AvailabilityModel.prototype.toBackend(availability));
        dispatch({type: actions.createAvailability, payload: new AvailabilityModel(data.data)});
    } catch (error) {
        console.log(error);
    }
};

// Update availability
export const updateAvailability = (roomId, availability) => async (dispatch) => {
    try {
        const { data } = await api.updateAvailability(roomId, availability.id, AvailabilityModel.prototype.toBackend(availability));
        dispatch({type: actions.updateAvailability, payload: new AvailabilityModel(data.data)});
    } catch (error) {
        console.log(error);
    }
};
