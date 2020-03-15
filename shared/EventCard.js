import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { levelImages } from '../styles/LevelImages';
import Card from './Card'


export default function EventCard({ event }) {
    return (
        <Card>
            <View style={styles.name}>
                <Text style={styles.nameText}>{event.name}</Text>
            </View>
            <View style={styles.level}>
                <Image source={levelImages.levels[event.level]} />
            </View>
            <View style={globalStyles.row}>
                <View style={globalStyles.column1of3}>
                    <Text>{event.date}</Text>
                </View>
                <View style={globalStyles.column1of3}>
                    <Text>{event.hour}</Text>
                </View>
                <View style={globalStyles.column1of3}>
                    <Text>{event.address}</Text>
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    name: {
        alignItems: 'center',
        marginBottom: 5
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    level: {
        height: 20,
        marginBottom: 5
    }
});