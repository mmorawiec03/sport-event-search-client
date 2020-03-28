import React, { useContext } from 'react';
import { View } from 'react-native';
import MenuNavigator from './MenuNavigator';
import Login from '../screens/Login';
import { globalStyles } from '../styles/GlobalStyles';
import { AuthContext } from '../contexts/AuthContext';

export default function AuthNavigator() {
    const { authData } = useContext(AuthContext);

    return (
        <View style={globalStyles.container}>
            {authData.isAuth ? (<MenuNavigator />) : (<Login />)}
        </View>
    );
}