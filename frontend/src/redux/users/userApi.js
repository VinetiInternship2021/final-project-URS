import axios from 'axios/index';
import { url } from '../reduxConstants';

const token = localStorage.getItem('jwtToken');

export const getUsers = () => axios.get(`${url}/users`, { headers: { 'Authorization': `${token}`}});
