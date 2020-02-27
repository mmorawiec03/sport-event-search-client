import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import EventCard from '../shared/EventCard';


export default function AllEvents({ navigation }) {
  
  const [events, setEvents] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const getEventsFromApi = () => {
    return fetch('http://192.168.0.227:3000/api/events')
      .then((response) => response.json())
      .then((responseJson) => {
        setEvents(responseJson);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getEventsFromApi();
  });

  const eventsList = isLoaded ? (
    <FlatList
      data={events}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => {navigation.navigate('EventDetails', item)}}>
          <EventCard event={item} />
        </TouchableOpacity>
      )}
    />
  ) : (
    <View style={globalStyles.centerContext}>
      <ActivityIndicator />
    </View>
  );

  return (
    <View style={globalStyles.container}>
      { eventsList }
    </View>
  );
}