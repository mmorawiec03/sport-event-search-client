import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import MyProfile from '../screens/MyProfile';
import Header from '../shared/Header';


const MyProfileStack = createStackNavigator({
    MyProfile: {
        screen: MyProfile,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='PROFILE' />,
                headerTitleAlign: 'center'
            }
        }
    }
});

export default MyProfileStack;