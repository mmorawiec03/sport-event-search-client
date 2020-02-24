import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function MyProfile() {
    return (
        <View style={globalStyles.container}>
            <Text>My profile</Text>
        </View>
    );
}