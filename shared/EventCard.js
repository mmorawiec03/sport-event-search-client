import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { disciplineColors } from '../styles/DisciplineColors';
import Card from './Card'
import { Entypo, FontAwesome } from '@expo/vector-icons';

//<Image source={levelImages.levels[event.level]} />

export default function EventCard({ event }) {
    return (
        <Card>
            <View>
                <Text style={globalStyles.headerText}>{event.name.toUpperCase()}</Text>
                <Text style={globalStyles.paragraph}>{event.date}, {event.hour}</Text>
                <Text style={globalStyles.paragraph}>{event.address}</Text>
            </View>
            <View>
                <View style={styles.row}>
                    <Text style={globalStyles.paragraph}>{event.discipline}</Text>
                    <FontAwesome name='circle' color={disciplineColors.colors[event.discipline]} size={24} />
                </View>
                <View style={styles.row}>
                    {[...Array(event.level)].map((e, i) => <Entypo name='star' color='#ffae00' size={18} key={i} />)}
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 2
    },
});