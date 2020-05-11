import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { deleteEvent } from '../api/endpoints';


export default function DeleteEventButton({ navigation, eventId, getEvents }) {

    const deleteEventAlert = () => {
        Alert.alert(
            'Delete event',
            'Are you sure you want to delete the event?',
            [
                {text: 'Delete', onPress: handleDelete},
                {text: 'Cancel', style: 'cancel'}
            ],
            {cancelable: true}
        )
    }

    const handleDelete = () => {
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
        <TouchableOpacity onPress={deleteEventAlert}>
            <View style={globalStyles.buttonContainer}>
                <Text style={globalStyles.buttonText}>DELETE</Text>
            </View>
        </TouchableOpacity>
    );
}