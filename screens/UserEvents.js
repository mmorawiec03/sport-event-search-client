import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import EventCard from '../shared/EventCard';


export default function UserEvents({ navigation, events, refreshing, onRefresh }) {

    return (
        <View style={globalStyles.container}>
            <FlatList
            data={events}
            renderItem={({ item }) => ( 
                <TouchableOpacity onPress={() => {navigation.navigate('EventDetails', item)}}>
                    <EventCard event={item} />
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item._id}
            refreshing={refreshing}
            onRefresh={onRefresh}
            />
        </View>
    );
}