import { createStackNavigator } from 'react-navigation-stack';
import MyEvents from '../screens/MyEvents';


const MyEventsStack = createStackNavigator({
    MyEvents: {
        screen: MyEvents
    }
});

export default MyEventsStack;