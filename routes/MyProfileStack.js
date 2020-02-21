import { createStackNavigator } from 'react-navigation-stack';
import MyProfile from '../screens/MyProfile';


const MyProfileStack = createStackNavigator({
    MyProfile: {
        screen: MyProfile
    }
});

export default MyProfileStack;