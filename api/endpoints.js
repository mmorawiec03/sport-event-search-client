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

// for future
export async function refreshToken(refreshToken) {
    return await api.post('/auth/refresh', {refreshToken: `Bearer ${refreshToken}`});
}