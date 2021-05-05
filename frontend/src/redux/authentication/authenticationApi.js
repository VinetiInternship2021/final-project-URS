import axios from 'axios/index';

const url = 'http://localhost:8080';

export const login = (user) => axios.post(`${url}/user`, user);
export const register = (user) => axios.post(`${url}/user/register`, user);
