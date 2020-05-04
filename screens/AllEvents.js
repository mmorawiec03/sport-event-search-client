import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import EventCard from '../shared/EventCard';
import Card from '../shared/Card';
import { getEvents } from '../api/endpoints';
import Loading from './Loading';
import { MaterialIcons } from '@expo/vector-icons';
import AppModal from './AppModal';
import AddEventForm from '../forms/AddEventForm';


export default function AllEvents({ navigation }) {
  
  const [events, setEvents] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [addEventOpen, setAddEventOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
      ListHeaderComponent={
        <>
          <TouchableOpacity onPress={() => setSearchOpen(true)}>
            <Card>
              <Text style={globalStyles.headerText}>CATEGORIES</Text>
              <MaterialIcons name='search' size={32} color='lightgrey' />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAddEventOpen(true)}>
            <Card>
              <Text style={globalStyles.headerText}>ADD EVENT</Text>
              <MaterialIcons name='add' size={32} color='lightgrey' />
            </Card>
          </TouchableOpacity>
        </>
      }
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

      <AppModal modalOpen={searchOpen} closeModal={() => setSearchOpen(false)} >
        <Text style={globalStyles.headerText}>search open</Text>
      </AppModal>

      <AppModal modalOpen={addEventOpen} closeModal={() => setAddEventOpen(false)} >
        <AddEventForm />
      </AppModal>

      { eventsList }
    </View>
  );
}