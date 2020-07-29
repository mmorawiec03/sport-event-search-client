import * as SecureStore from 'expo-secure-store';

exports.getUserData = async () => {
    try {
        return JSON.parse(await SecureStore.getItemAsync('user'));
    } catch(e) {
        console.log(`[ERROR] ${e}`);
    }
}

exports.setUserData = async (user) => {
    if (user) {
        try {
            return await SecureStore.setItemAsync('user', JSON.stringify(user));
        } catch (e) {
            console.log(`[ERROR] ${e}`);
        }
    }
}

exports.deleteUserData = async () => {
    try {
        return await SecureStore.deleteItemAsync('user');
    } catch(e) {
        console.log(`[ERROR] ${e}`);
    }
}