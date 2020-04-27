import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import UserEvents from './UserEvents';
import { getJoinedEvents } from '../api/endpoints';
import { getOwnedEvents } from '../api/endpoints';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Loading from './Loading';
import { AuthContext } from '../contexts/AuthContext';
import { globalStyles } from '../styles/GlobalStyles';


export default function MyEvents({ navigation }) {

    const { authData } = useContext(AuthContext);
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'joined', title: 'Joined' },
        { key: 'owned', title: 'Owned' },
    ]);
    const [joinedEvents, setJoinedEvents] = useState('');
    const [ownedEvents, setOwnedEvents] = useState('');
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getUserEvents();
    }, [refreshing]);

    const handleRefresh = () => {
        setRefreshing(true);
    }

    const renderScene = SceneMap({
        joined: () => <UserEvents events={joinedEvents} navigation={navigation} refreshing={refreshing} onRefresh={handleRefresh} />,
        owned: () => <UserEvents events={ownedEvents} navigation={navigation} refreshing={refreshing} onRefresh={handleRefresh} />,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#208484' }}
            style={{ backgroundColor: '#222222' }}
            activeColor="#208484"
        />
    );

    const getUserEvents = () => {
        return getJoinedEvents(authData.user._id).then(res => {
            setJoinedEvents(res.data);
        }).then(() => {
            getOwnedEvents(authData.user._id).then(res => {
                setOwnedEvents(res.data);
                setLoading(false);
                setRefreshing(false);
            }).catch(err => {
                setLoading(false);
                setRefreshing(false);
            });
        }).catch(err => {
            setLoading(false);
            setRefreshing(false);
        });
    }

    return (
        <View style={globalStyles.container}>
            {loading ? (
                <Loading />
                ) : (
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    renderTabBar={renderTabBar}
                />
            )}
        </View>
    );
}