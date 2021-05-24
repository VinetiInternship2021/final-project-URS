import { combineReducers } from 'redux';
import authReducer from './authentication/authenticationReducer';
import roomsReducer from './rooms/roomsReducer';
import usersReducer from './users/userReducer';

export default combineReducers({ auth: authReducer, room: roomsReducer, user: usersReducer });
