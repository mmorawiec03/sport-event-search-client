import { createStackNavigator } from 'react-navigation-stack';
import MyEvents from '../screens/MyEvents';


const MyEventsStack = createStackNavigator({
    MyEvents: {
        screen: MyEvents,
        navigationOptions: {
            title: 'My events',
            headerStyle: { backgroundColor: 'lightgrey' },
            headerTitleAlign: 'center'
        }
    }
});

export default MyEventsStack;