import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text>About page!</Text>
        </View>
    )
}