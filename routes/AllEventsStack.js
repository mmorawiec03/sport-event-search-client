import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AllEvents from '../screens/AllEvents';
import EventDetails from '../screens/EventDetails';


const AllEventsStack = createStackNavigator({
    AllEvents: {
        screen: AllEvents
    },
    EventDetails: {
        screen: EventDetails
    }
});

export default AllEventsStack;