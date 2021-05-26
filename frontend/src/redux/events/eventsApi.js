import axios from 'axios/index';
import { url } from '../reduxConstants';

const token = localStorage.getItem('jwtToken');

export const createEvent = (booking_id, event) =>
    axios.post(`${url}/room_bookings/${booking_id}/events`, event, { headers: { 'Authorization': `${token}`}});
