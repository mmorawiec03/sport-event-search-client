import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function Card(props) {
    return (
    <View style={globalStyles.card}>
        { props.children }
    </View>
    )
}
