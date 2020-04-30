import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import EventCard from '../shared/EventCard';
import { getEvents } from '../api/endpoints';
import Loading from './Loading';


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
    return getEvents().then(response => {
      setEvents(response.data);
      setLoading(false);
      setRefreshing(false);
    }).catch(error => {
      setLoading(false);
      setRefreshing(false);
    });
  }


  const eventsList = loading ? (
    <Loading />
  ) : (
    <FlatList
      data={events}
      renderItem={({ item }) => (
        item.participantsLimit > item.participants.length ? (
          <TouchableOpacity onPress={() => {navigation.navigate('EventDetails', { item, joined: false, owned: false })}}>
            <EventCard event={item} />
          </TouchableOpacity>
        ) : (
          null
        )
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