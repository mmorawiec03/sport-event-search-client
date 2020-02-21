import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/Global';


export default function EventCard({ event }) {
    return (
        <View style={globalStyles.container}>
            <View style={styles.card}>
                <Text>{event.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 0.5,
        borderColor: 'grey',
        margin: 10,
        padding: 10,
        width: '100%'
    }
})