import axios from 'axios/index';
import { url } from '../reduxConstants';

const token = localStorage.getItem('jwtToken');

export const createRoomBooking = (roomBooking) => axios.post(`${url}/room_bookings`, roomBooking, { headers: { 'Authorization': `${token}`}});
export const getRoomBookings = () => axios.get(`${url}/room_bookings`, { headers: { 'Authorization': `${token}`}});
