import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/Global';

export default function EventDetails({ navigation }) {
    const name = navigation.getParam('name');
    const description = navigation.getParam('description');
    const discipline = navigation.getParam('discipline');
    const level = navigation.getParam('level');
    return (
        <View style={globalStyles.container}>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Text>{discipline}</Text>
            <Text>{level}</Text>
        </View>
    )
}