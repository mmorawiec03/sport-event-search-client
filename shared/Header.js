import React, { useContext } from 'react';
import { Text, View, ImageBackground, Alert } from 'react-native';
import { headerStyles } from '../styles/HeaderStyles';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { AuthContext } from '../contexts/AuthContext';


export default function Header({ navigation, title }) {
    const { dispatch } = useContext(AuthContext);

    const logout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                {text: 'Logout', onPress: () => dispatch({type: 'LOGOUT'})},
                {text: 'Cancel', style: 'cancel'}
            ],
            {cancelable: true}
        );
    }

    const showMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={headerStyles.header}>
            <Feather name='menu' size={28} color='white' onPress={showMenu} />
            <Text style={headerStyles.headerTitle}>{title}</Text>
            <MaterialCommunityIcons name='logout' size={32} color='white' onPress={logout} />
        </View>
    );
}