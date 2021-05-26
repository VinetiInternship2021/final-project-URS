import * as api from './roomBookingApi';
import * as actions from '../reduxConstants';
import { RoomBookingModel } from '../../models/roomBookingModel';
import * as _ from 'lodash';

// Create room booking

export const createRoomBooking = (roomBooking) => async (dispatch) => {
    try {
        const { data } = await api.createRoomBooking(RoomBookingModel.prototype.toBackend(roomBooking));
        dispatch({type: actions.createRoomBooking, payload: new RoomBookingModel(data.data)});
        return new RoomBookingModel(data.data);
    } catch (error) {
        console.log(error);
    }
};

// get room bookings
export const getRoomBookings = () => async (dispatch) => {
    try {
        const { data } = await api.getRoomBookings();
        dispatch({type: actions.getRoomBookings, payload: _.map(data.data, room => new RoomBookingModel(room))});
    } catch (error) {
        console.log(error);
    }
};
