import { createStackNavigator } from 'react-navigation-stack';
import AllEvents from '../screens/AllEvents';
import EventDetails from '../screens/EventDetails';


const AllEventsStack = createStackNavigator({
    AllEvents: {
        screen: AllEvents,
        navigationOptions: {
            title: 'All events',
            headerStyle: { backgroundColor: 'lightgrey' },
            headerTitleAlign: 'center'
        }
    },
    EventDetails: {
        screen: EventDetails,
        navigationOptions: {
            title: 'Details',
            headerStyle: { backgroundColor: 'lightgrey' },
            headerTitleAlign: 'center'
        }
    }
});

export default AllEventsStack;