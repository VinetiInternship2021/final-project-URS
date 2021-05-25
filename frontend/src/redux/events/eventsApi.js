import axios from 'axios/index';
import { url } from '../reduxConstants';

const token = localStorage.getItem('jwtToken');

export const getEvents = (type) => axios.get(getEventsUrl(type), { headers: { 'Authorization': `${token}`}});
export const createEvent = (event) => axios.post(`${url}/events`, event, { headers: { 'Authorization': `${token}`}});
export const updateEvent = (id, updatedEvent) => axios.patch(`${url}/events/${id}`, updatedEvent, { headers: { 'Authorization': `${token}`}});
export const deleteEvent = (id) => axios.delete(`${url}/events/${id}`, { headers: { 'Authorization': `${token}`}});

function getEventsUrl(type) {
    let eventsUrl = `${url}/events`;
    return type ? `${eventsUrl}?event_type=${type}` : eventsUrl;
}