import axios from 'axios/index';
import { url } from '../reduxConstants';

const token = localStorage.getItem('jwtToken');

export const getRooms = (type) => axios.get(getRoomsUrl(type), { headers: { 'Authorization': `${token}`}});
export const getRoomById = (id) => axios.get(`${url}/rooms/${id}`, { headers: { 'Authorization': `${token}`}});
export const createRoom = (room) => axios.post(`${url}/rooms`, room, { headers: { 'Authorization': `${token}`}});
export const updateRoom = (id, updatedRoom) => axios.put(`${url}/rooms/${id}`, updatedRoom, { headers: { 'Authorization': `${token}`}});
export const deleteRoom = (id) => axios.delete(`${url}/rooms/${id}`, { headers: { 'Authorization': `${token}`}});

function getRoomsUrl(type) {
    let roomsUrl = `${url}/rooms`;
    return type ? `${roomsUrl}?room_type=${type}` : roomsUrl;
}
