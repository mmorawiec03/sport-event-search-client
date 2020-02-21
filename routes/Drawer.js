import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AllEventsStack from './AllEventsStack';
import AboutStack from './AboutStack';
import MyEventsStack from './MyEventsStack'
import MyProfileStack from './MyProfileStack'


const Drawer = createDrawerNavigator({
    AllEvents: {
        screen: AllEventsStack
    },
    MyEvents: {
        screen: MyEventsStack
    },
    MyProfile: {
        screen: MyProfileStack
    },
    About: {
        screen: AboutStack
    }
});

export default createAppContainer(Drawer);