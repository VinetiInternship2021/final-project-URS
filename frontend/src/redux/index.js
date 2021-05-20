import { combineReducers } from 'redux';
import authReducer from './authentication/authenticationReducer';

export default combineReducers({auth: authReducer});
