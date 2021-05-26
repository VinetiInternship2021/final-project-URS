import * as api from './eventsApi';
import * as actions from '../reduxConstants';
import { EventModel } from '../../models/eventModel';

// Create event
export const createEvent = (bookingId, event) => async (dispatch) => {
    try {
        const { data } = await api.createEvent(bookingId, EventModel.prototype.toBackend(event));
        dispatch({type: actions.createEvent, payload: new EventModel(data.data)});
    } catch (error) {
        console.log(error);
    }
};
