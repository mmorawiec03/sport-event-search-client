import React, { useContext } from 'react';
import { View } from 'react-native';
import Drawer from './Drawer';
import Login from '../screens/Login';
import { globalStyles } from '../styles/GlobalStyles';
import { AuthContext } from '../contexts/AuthContext';

export default function AuthNavigator() {
    const { authData } = useContext(AuthContext);

    return (
        <View style={globalStyles.container}>
            {authData.isAuth ? (<Drawer />) : (<Login />)}
        </View>
    );
}