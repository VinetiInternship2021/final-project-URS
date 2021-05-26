import { combineReducers } from 'redux';
import authReducer from './authentication/authenticationReducer';
import roomsReducer from './rooms/roomsReducer';
import usersReducer from './users/userReducer';
import roomBookingReducer from './roomBooking/roomBookingReducer';
import eventsReducer from './events/eventsReducer';

export default combineReducers({
    auth: authReducer,
    room: roomsReducer,
    user: usersReducer,
    roomBook: roomBookingReducer,
    event: eventsReducer
});
