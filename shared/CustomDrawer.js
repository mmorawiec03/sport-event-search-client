import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { customDrawerStyles } from '../styles/CustomDrawerStyles';

export default function CustomDrawer(props) {
    return (
        <SafeAreaView style={customDrawerStyles.drawer}>
            <View style={customDrawerStyles.iconView}>
                <Image source={require('../assets/drawer-icon.png')} style={customDrawerStyles.drawerIcon} />
            </View>
            <View style={customDrawerStyles.titleView}>
                <Text style={customDrawerStyles.drawerTitle}>Sport Event Search</Text>
            </View>
            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>
        </SafeAreaView>
    )
}

