import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import EventCard from '../shared/EventCard';
import { AuthContext } from '../contexts/AuthContext';
import { getJoinedEvents } from '../api/endpoints';
import Loading from './Loading';


export default function UserEvents({ navigation }) {

    const { authData } = useContext(AuthContext);
    const [joinedEvents, setJoinedEvents] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getEvents();
    }, [refreshing]);

    const handleRefresh = () => {
        setRefreshing(true);
    }

    const getEvents = () => {
        return getJoinedEvents(authData.user._id).then(res => {
            setJoinedEvents(res.data);
            setLoading(false);
            setRefreshing(false);
        }).catch(err => {
            setLoading(false);
            setRefreshing(false);
        });
    }

    return (
        <View style={globalStyles.container}>
            { loading ? (
                <Loading />
            ) : (
                <FlatList
                    data={joinedEvents}
                    renderItem={({ item }) => ( 
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('EventDetails', { item, joined: true, owned: false, getEvents })
                        }}>
                            <EventCard event={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item._id}
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                />
                )}
        </View>
    );
}