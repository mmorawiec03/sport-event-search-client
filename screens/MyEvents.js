import React, { useState } from 'react';
import { View } from 'react-native';
import JoinedEvents from './JoinedEvents';
import OwnedEvents from './OwnedEvents';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { globalStyles } from '../styles/GlobalStyles';


export default function MyEvents({ navigation }) {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'joined', title: 'Joined' },
        { key: 'owned', title: 'Owned' },
    ]);

    const renderScene = SceneMap({
        joined: () =>   <JoinedEvents navigation={navigation} />,
        owned: () =>    <OwnedEvents navigation={navigation} />,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#208484' }}
            style={{ backgroundColor: '#222222' }}
            activeColor="#208484"
        />
    );

    return (
        <View style={globalStyles.container}> 
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
            />
        </View>
    );
}