import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function MyEvents() {
    return (
        <View style={globalStyles.container}>
            <Text>My events!</Text>
        </View>
    );
}