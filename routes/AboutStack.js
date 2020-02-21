import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';


const AboutStack = createStackNavigator({
    About: {
        screen: About
    }
});

export default AboutStack;