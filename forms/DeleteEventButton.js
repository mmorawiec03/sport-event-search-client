import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { deleteEvent } from '../api/endpoints';


export default function DeleteEventButton({ navigation, eventId, getEvents }) {

    const handlePress = () => {
        deleteEvent(eventId).then(res => {
            if (res.status == 200) {
                Alert.alert('Success', res.data.message);
                getEvents();
                navigation.goBack();
            }
        }).catch(err => {
            Alert.alert('Error', err.response.data.message);
        });
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={globalStyles.buttonContainer}>
                <Text style={globalStyles.buttonText}>DELETE</Text>
            </View>
        </TouchableOpacity>
    );
}