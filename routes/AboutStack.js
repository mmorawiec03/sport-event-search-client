import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';


const AboutStack = createStackNavigator({
    About: {
        screen: About,
        navigationOptions: {
            title: 'About',
            headerStyle: { backgroundColor: 'lightgrey' },
            headerTitleAlign: 'center'
        }
    }
});

export default AboutStack;