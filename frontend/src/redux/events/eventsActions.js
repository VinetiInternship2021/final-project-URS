import * as api from './eventsApi';
import * as actions from '../reduxConstants';
import { EventModel } from '../../models/eventModel';
import * as _ from 'lodash';

// Create event
export const createEvent = (bookingId, event) => async (dispatch) => {
    try {
        const { data } = await api.createEvent(bookingId, EventModel.prototype.toBackend(event));
        dispatch({type: actions.createEvent, payload: new EventModel(data.data)});
    } catch (error) {
        console.log(error);
    }
};

// get room bookings
export const getEvents = () => async (dispatch) => {
    try {
        const { data } = await api.getEvents();
        dispatch({type: actions.getEvents, payload: _.map(data.data, room => new EventModel(room))});
    } catch (error) {
        console.log(error);
    }
};
