import * as Axios from 'axios';
import { getAccessToken } from '../storage/Token';


const apiHost = 'http://192.168.0.59:3000';

export const api = Axios.create({
    baseURL: apiHost,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const prepareHeaders = (token) => {
    return { 
        headers: { Authorization: `Bearer ${token}`}
    }
}

export const sendRequest = (callback) => {
    return new Promise(resolve => {
        getAccessToken().then(accessToken => {
            if (typeof callback == "function")
                resolve(callback(prepareHeaders(accessToken)));
        });
    });
}