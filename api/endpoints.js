import { api, authHeader } from './apiHost';


export async function login(login, password) {
    return await api.post('/auth/login', {email: login, password: password});
}

export async function register(data) {
    return await api.post('/auth/register', data);
}

export async function getEvents() {
    return await api.get('/api/events');
}

export async function getJoinedEvents(userId) {
    return await api.get(`/api/events/joined/${userId}`);
}

export async function getOwnedEvents(userId) {
    return await api.get(`/api/events/owned/${userId}`);
}

export async function joinEvent(eventId, user) {
    return await api.put(`/api/events/join/${eventId}`, user );
}

export async function leaveEvent(eventId, user) {
    return await api.put(`/api/events/leave/${eventId}`, user);
}

export async function deleteEvent(eventId) {
    return await api.delete(`/api/events/${eventId}`);
}

// for future
export async function refreshToken(refreshToken) {
    return await api.post('/auth/refresh', {refreshToken: `Bearer ${refreshToken}`});
}