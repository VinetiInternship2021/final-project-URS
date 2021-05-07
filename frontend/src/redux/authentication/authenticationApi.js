import axios from 'axios/index';

const url = 'http://localhost:3000';

export const login = (user) => axios.post(`${url}/login`, { user: user });
export const logout = () => axios.delete(`${url}/logout`);
export const register = (user) => axios.post(`${url}/signup`, { user: user });
