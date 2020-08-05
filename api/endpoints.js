import { api, sendRequest } from './apiHost';


export async function login(login, password) {
    return await api.post('/auth/login', {email: login, password: password});
}

export async function register(data) {
    return await api.post('/auth/register', data);
}

export function getEvents() {
    return sendRequest(headers => api.get('/api/events', headers));
}

export function getJoinedEvents(userId) {
    return sendRequest(headers => api.get(`/api/events/joined/${userId}`, headers));
}

export function getOwnedEvents(userId) {
    return sendRequest(headers => api.get(`/api/events/owned/${userId}`, headers));
}

export function joinEvent(eventId, user) {
    return sendRequest(headers => api.put(`/api/events/join/${eventId}`, user, headers));
}

export function leaveEvent(eventId, user) {
    return sendRequest(headers => api.put(`/api/events/leave/${eventId}`, user, headers));
}

export function deleteEvent(eventId) {
    return sendRequest(headers => api.delete(`/api/events/${eventId}`, headers));
}

export function addEvent(event) {
    return sendRequest(headers => api.post('/api/events', event, headers));
}

export function getEventsByDiscipline(discipline) {
    return sendRequest(headers => api.get(`/api/events/${discipline}`, headers));
}

export async function refreshTokens(refreshToken) {
    return await api.post('/auth/refresh', {refreshToken: `Bearer ${refreshToken}`});
}