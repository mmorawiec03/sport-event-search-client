import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function Loading() {
    return (
        <View style={globalStyles.centerContext}>
            <ActivityIndicator size="large" color='#208484' />
        </View>
    )
}
