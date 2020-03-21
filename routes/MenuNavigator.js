import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import CustomDrawer from '../shared/CustomDrawer';
import AllEventsStack from './AllEventsStack';
import AboutStack from './AboutStack';
import MyEventsStack from './MyEventsStack';
import MyProfileStack from './MyProfileStack';


const MenuNavigator = createDrawerNavigator({
    AllEvents: {
        screen: AllEventsStack,
        navigationOptions: {
            title: 'All Events'
        }
    },
    MyEvents: {
        screen: MyEventsStack,
        navigationOptions: {
            title: 'My Events'
        }
    },
    MyProfile: {
        screen: MyProfileStack,
        navigationOptions: {
            title: 'My Profile'
        }
    },
    About: {
        screen: AboutStack,
        navigationOptions: {
            title: 'About'
        }
    }
}, {
    contentComponent: CustomDrawer
});

export default createAppContainer(MenuNavigator);