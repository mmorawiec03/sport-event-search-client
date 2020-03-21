import React, { useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { customDrawerStyles } from '../styles/CustomDrawerStyles';
import { AuthContext } from '../contexts/AuthContext';

export default function CustomDrawer(props) {
    const { dispatch } = useContext(AuthContext);
    const handlePress = () => {
        dispatch({type: 'LOGOUT'});
    }
    return (
        <SafeAreaView style={customDrawerStyles.drawer}>
            <View style={customDrawerStyles.iconContainer}>
                <Image source={require('../assets/app-icon.png')} style={customDrawerStyles.drawerIcon} />
            </View>
            <View style={customDrawerStyles.titleContainer}>
                <Text style={customDrawerStyles.drawerTitle}>Sport Event Search</Text>
            </View>
            <ScrollView>
                <DrawerItems 
                    activeTintColor={'darkgreen'}
                    {...props}
                />
            </ScrollView>
            <TouchableOpacity style={customDrawerStyles.logoutButton} onPress={handlePress}>
                <Text style={customDrawerStyles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

