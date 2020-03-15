import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { headerStyles } from '../styles/HeaderStyles';
import { Feather } from '@expo/vector-icons';


export default function Header({ navigation, title }) {
    const pressHandler = () => {
        navigation.openDrawer();
    }
    return (
        <ImageBackground source={require('../assets/header-background.jpg')} style={headerStyles.header}>
            <View style={headerStyles.menuIcon}>
                <Feather name='menu' size={28} onPress={pressHandler} />
            </View>
            <View>
                <Text style={headerStyles.headerTitle}>{title}</Text>
            </View>
        </ImageBackground>
    );
}