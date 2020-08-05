import jwtDecode from "jwt-decode";
import { isValid, toDate, isBefore, differenceInMilliseconds, fromUnixTime } from "date-fns";
import { getAccessToken, getRefreshToken, deleteTokens, setTokens } from '../storage/Token';
import { refreshTokens } from '../api/endpoints';
import { AuthContext } from '../contexts/AuthContext';


export const decodeToken = (token) => token && jwtDecode(token);

export const getTimeDiff = (exp) => {
    if (!exp) return false;
    return differenceInMilliseconds(fromUnixTime(Number(exp), new Date()));
}

export const isTokenValid = (token) => {
    if (!token) return false;
    try {
        const exp = jwtDecode(token).exp;
        const expMoment = toDate(exp * 1000);
        if (isValid(expMoment)) return isBefore(new Date(), expMoment);
        return true;
    } catch (e) {
        return false;
    }
}

export const isAccessTokenValid = () => {
    return new Promise(resolve => {
        getAccessToken().then(accessToken => {
            resolve(isTokenValid(accessToken));
        });
    });
}

export const isRefreshTokenValid = () => {
    return new Promise(resolve => {
        getRefreshToken().then(refreshToken => {
            resolve(isTokenValid(refreshToken));
        });
    });
}
