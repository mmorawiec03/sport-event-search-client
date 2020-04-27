import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/Header';
import MyEvents from '../screens/MyEvents';
import EventDetails from '../screens/EventDetails';


const MyEventsStack = createStackNavigator({
    MyEvents: {
        screen: MyEvents,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='MY EVENTS' />,
                headerTitleAlign: 'center'
            }
        }
    },
    EventDetails: {
        screen: EventDetails,
        navigationOptions: {
            title: 'DETAILS',
            headerStyle: {backgroundColor: '#222222'},
            headerTintColor: 'white',
            headerTitleAlign: 'center'
        }
    }
});

export default MyEventsStack;