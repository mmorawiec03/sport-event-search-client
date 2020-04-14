import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/Header';
import AllEvents from '../screens/AllEvents';
import EventDetails from '../screens/EventDetails';


const AllEventsStack = createStackNavigator({
    AllEvents: {
        screen: AllEvents,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='EVENTS' />,
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

export default AllEventsStack;