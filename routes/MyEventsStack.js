import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/Header';
import MyEvents from '../screens/MyEvents';


const MyEventsStack = createStackNavigator({
    MyEvents: {
        screen: MyEvents,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='My Events' />,
                headerTitleAlign: 'center'
            }
        }
    }
});

export default MyEventsStack;