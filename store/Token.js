import { AsyncStorage } from 'react-native';

exports.getAccessToken = async () => {
    try {
        return await AsyncStorage.getItem('@accessToken');
    } catch(e) {
        // error
    }
}

exports.getRefreshToken = async () => {
    try {
        return await AsyncStorage.getItem('@refreshToken');
    } catch(e) {
        // error
    }
}

exports.setTokens = async (tokens) => {
    if (tokens.accessToken) {
        try {
            return await AsyncStorage.setItem('@accessToken', tokens);
        } catch (e) {
            // error
        }
    }
    if (tokens.refreshToken) {
        try {
            return await AsyncStorage.setItem('@refreshToken', tokens);
        } catch (e) {
            // error
        }
    }
}

exports.removeTokens = async () => {
    try {
        await AsyncStorage.removeItem('@accessToken');
        await AsyncStorage.removeItem('@refreshToken');
    } catch(e) {
        // error
    }
}