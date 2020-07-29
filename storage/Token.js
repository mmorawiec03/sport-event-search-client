import * as SecureStore from 'expo-secure-store';

exports.getAccessToken = async () => {
    try {
        return JSON.parse(await SecureStore.getItemAsync('tokens')).accessToken;
    } catch(e) {
        console.log(`[ERROR] ${e}`);
    }
}

exports.getRefreshToken = async () => {
    try {
        return JSON.parse(await SecureStore.getItemAsync('tokens')).refreshToken;
    } catch(e) {
        console.log(`[ERROR] ${e}`);
    }
}

exports.setTokens = async (tokens) => {
    if (tokens) {
        try {
            return await SecureStore.setItemAsync('tokens', JSON.stringify(tokens));
        } catch (e) {
            console.log(`[ERROR] ${e}`);
        }
    }
}

exports.deleteTokens = async () => {
    try {
        return await SecureStore.deleteItemAsync('tokens');
    } catch(e) {
        console.log(`[ERROR] ${e}`);
    }
}