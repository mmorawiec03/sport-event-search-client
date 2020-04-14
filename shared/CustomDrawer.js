import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { customDrawerStyles } from '../styles/CustomDrawerStyles';

export default function CustomDrawer(props) {
    return (
        <SafeAreaView style={customDrawerStyles.container}>
            <View style={customDrawerStyles.iconContainer}>
                <Image source={require('../assets/logo.png')} style={customDrawerStyles.drawerIcon} />
            </View>
            <ScrollView>
                <DrawerItems 
                    activeTintColor={'#208484'}
                    activeBackgroundColor={'rgba(94, 94, 94, 0.2)'}
                    inactiveTintColor={'lightgrey'}
                    labelStyle={customDrawerStyles.label}
                    itemStyle={customDrawerStyles.item}
                    {...props}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

