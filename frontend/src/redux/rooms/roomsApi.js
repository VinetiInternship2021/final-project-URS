import axios from 'axios/index';
import { url } from '../reduxConstants';

const token = localStorage.getItem('jwtToken');

export const getRooms = () => axios.get(`${url}/rooms`, { headers: { 'Authorization': `${token}`}});
export const createRoom = (room) => axios.post(`${url}/rooms`, room, { headers: { 'Authorization': `${token}`}});
export const updateRoom = (id, updatedRoom) => axios.patch(`${url}/rooms/${id}`, updatedRoom, { headers: { 'Authorization': `${token}`}});
export const deleteRoom = (id) => axios.delete(`${url}/rooms/${id}`, { headers: { 'Authorization': `${token}`}});
