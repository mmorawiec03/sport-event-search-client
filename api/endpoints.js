import { api, getAuthHeader } from './apiHost';


export async function login(login, password) {
    return await api.post('/auth/login', {email: login, password: password});
}

export async function register(data) {
    return await api.post('/auth/register', data);
}

export function getEvents() {
    return new Promise(resolve => {
        getAuthHeader().then(authHeader => {
            resolve(api.get('/api/events', { headers: authHeader}));
        });
    });
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

export async function addEvent(event) {
    return await api.post('/api/events', event);
}

export async function getEventsByDiscipline(discipline) {
    return await api.get(`/api/events/${discipline}`);
}

// for future
export async function refreshToken(refreshToken) {
    return await api.post('/auth/refresh', {refreshToken: `Bearer ${refreshToken}`});
}