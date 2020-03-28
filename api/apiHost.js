import * as Axios from 'axios';
import { getAccessToken } from '../store/Token';


const apiHost = 'http://192.168.0.107:3000';

export const api = Axios.create({
    baseURL: apiHost,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

// for future
export const authHeader = () => {
    return {
        Authorization: `Bearer ${getAccessToken()}`
    }
}