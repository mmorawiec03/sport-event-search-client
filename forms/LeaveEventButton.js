import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { leaveEvent } from '../api/endpoints';
import { AuthContext } from '../contexts/AuthContext';


export default function LeaveEventButton({ navigation, eventId, getEvents }) {

    const { authData } = useContext(AuthContext);

    const user = {
        userId: authData.user._id,
        fullName: authData.user.fullName,
        email: authData.user.email,
        phoneNumber: authData.user.phoneNumber
    }

    const handlePress = () => {
        leaveEvent(eventId, user).then(res => {
            if (res.status == 200) {
                Alert.alert('Success', res.data.message);
                getEvents();
                navigation.goBack();
            } else
                Alert.alert('Error', res.data.message);
        }).catch(err => {
            Alert.alert('Error', err.response.data.message);
        });
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={globalStyles.buttonContainer}>
                <Text style={globalStyles.buttonText}>LEAVE</Text>
            </View>
        </TouchableOpacity>
    );
}