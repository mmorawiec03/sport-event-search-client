import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';
import Header from '../shared/Header';


const AboutStack = createStackNavigator({
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About' />,
                headerTitleAlign: 'center'
            }
        }
    }
});

export default AboutStack;