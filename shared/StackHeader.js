import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { headerStyles } from '../styles/HeaderStyles';
import { MaterialIcons } from '@expo/vector-icons';


export default function StackHeader({ navigation, title }) {
    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <ImageBackground source={require('../assets/header-background.jpg')} style={headerStyles.header}>
            <View style={headerStyles.menuIcon}>
                <MaterialIcons name='keyboard-backspace' size={28} onPress={pressHandler} />
            </View>
            <View>
                <Text style={headerStyles.headerTitle}>{title}</Text>
            </View>
        </ImageBackground>
    );
}