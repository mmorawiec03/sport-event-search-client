import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { images } from '../styles/GlobalStyles';
import Card from './Card'


export default function EventCard({ event }) {
    return (
        <Card>
            <View style={styles.name}>
                <Text style={styles.nameText}>{event.name}</Text>
            </View>
            <View style={styles.level}>
                <Image source={images.levels[event.level]} />
            </View>
            <View style={styles.info}>
                <View style={styles.date}>
                    <Text>{event.date}</Text>
                </View>
                <View style={styles.hour}>
                    <Text>{event.hour}</Text>
                </View>
                <View style={styles.address}>
                    <Text>{event.address}</Text>
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    name: {
        flex: 1,
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
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    date: {
        flex: 0.33,
        alignItems: 'center'
    },
    hour: {
        flex: 0.33,
        alignItems: 'center'
    },
    address: {
        flex: 0.33,
        alignItems: 'center'
    }
})