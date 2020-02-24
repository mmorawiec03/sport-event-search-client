import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AllEventsStack from './AllEventsStack';
import AboutStack from './AboutStack';
import MyEventsStack from './MyEventsStack';
import MyProfileStack from './MyProfileStack';


const Drawer = createDrawerNavigator({
    AllEvents: {
        screen: AllEventsStack,
        navigationOptions: {
            title: 'All events'
        }
    },
    MyEvents: {
        screen: MyEventsStack,
        navigationOptions: {
            title: 'My events'
        }
    },
    MyProfile: {
        screen: MyProfileStack,
        navigationOptions: {
            title: 'My profile'
        }
    },
    About: {
        screen: AboutStack,
        navigationOptions: {
            title: 'About'
        }
    }
});

export default createAppContainer(Drawer);