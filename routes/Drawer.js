import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import CustomDrawer from '../shared/CustomDrawer';
import AllEventsStack from './AllEventsStack';
import AboutStack from './AboutStack';
import MyEventsStack from './MyEventsStack';
import MyProfileStack from './MyProfileStack';


const Drawer = createDrawerNavigator({
    AllEvents: {
        screen: AllEventsStack,
        navigationOptions: {
            title: 'EVENTS'
        }
    },
    MyEvents: {
        screen: MyEventsStack,
        navigationOptions: {
            title: 'MY EVENTS'
        }
    },
    MyProfile: {
        screen: MyProfileStack,
        navigationOptions: {
            title: 'PROFILE'
        }
    },
    About: {
        screen: AboutStack,
        navigationOptions: {
            title: 'ABOUT'
        }
    }
}, {
    contentComponent: CustomDrawer
});

export default createAppContainer(Drawer);