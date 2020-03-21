import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import EventCard from '../components/EventCard';


export default function AllEvents({ navigation }) {
  
  const [events, setEvents] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getEventsFromServer();
  }, [refreshing]);

  const handleRefresh = () => {
    setRefreshing(true);
  }

  const getEventsFromServer = () => {
    return fetch('http://192.168.0.105:3000/api/events')
      .then((response) => response.json())
      .then((responseJson) => {
        setEvents(responseJson);
        setLoading(false);
        setRefreshing(false);
      })
      .catch((error) => {
        setLoading(false);
        setRefreshing(false);
      });
  }

  const eventsList = loading ? (
    <View style={globalStyles.centerContext}>
      <ActivityIndicator size="large" color='black' />
    </View>
  ) : (
    <FlatList
      data={events}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => {navigation.navigate('EventDetails', item)}}>
          <EventCard event={item} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item._id}
      refreshing={refreshing}
      onRefresh={handleRefresh}
    />
  );

  return (
    <View style={globalStyles.container}>
      { eventsList }
    </View>
  );
}