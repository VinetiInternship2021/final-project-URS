import axios from 'axios/index';
import { url } from '../reduxConstants';

const token = localStorage.getItem('jwtToken');

export const getUsers = () => axios.get(`${url}/users`, { headers: { 'Authorization': `${token}`}});
export const getRequesters = () => axios.get(`${url}/users/verification`, { headers: { 'Authorization': `${token}`}});
export const updateUser = (id, updatedUser) => axios.put(`${url}/users/${id}`, updatedUser, { headers: { 'Authorization': `${token}`}});
export const deleteUser = (id) => axios.delete(`${url}/users/${id}`, { headers: { 'Authorization': `${token}`}});
