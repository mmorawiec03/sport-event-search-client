import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/Header';
import StackHeader from '../shared/StackHeader';
import AllEvents from '../screens/AllEvents';
import EventDetails from '../screens/EventDetails';


const AllEventsStack = createStackNavigator({
    AllEvents: {
        screen: AllEvents,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='All Events' />,
                headerTitleAlign: 'center'
            }
        }
    },
    EventDetails: {
        screen: EventDetails,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <StackHeader navigation={navigation} title='Details' />,
                headerTitleAlign: 'center'
            }
        }
    }
});

export default AllEventsStack;