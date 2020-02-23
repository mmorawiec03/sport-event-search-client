import { createStackNavigator } from 'react-navigation-stack';
import MyProfile from '../screens/MyProfile';


const MyProfileStack = createStackNavigator({
    MyProfile: {
        screen: MyProfile,
        navigationOptions: {
            title: 'My profile',
            headerStyle: { backgroundColor: 'lightgrey' },
            headerTitleAlign: 'center'
        }
    }
});

export default MyProfileStack;