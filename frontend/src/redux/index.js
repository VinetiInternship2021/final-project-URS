import { combineReducers } from 'redux';
import authReducer from './authentication/authenticationReducer';
import roomsReducer from './rooms/roomsReducer';

export default combineReducers({ auth: authReducer, room: roomsReducer });
