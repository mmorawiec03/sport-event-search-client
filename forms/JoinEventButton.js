import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { joinEvent } from '../api/endpoints';
import { AuthContext } from '../contexts/AuthContext';


export default function JoinEventButton({ navigation, eventId }) {

    const { authData } = useContext(AuthContext);

    const user = {
        userId: authData.user._id,
        fullName: authData.user.fullName,
        email: authData.user.email,
        phoneNumber: authData.user.phoneNumber
    }

    const handlePress = () => {
        joinEvent(eventId, user).then(res => {
            if (res.status == 200) {
                Alert.alert('Success', res.data.message);
                navigation.goBack();
                navigation.navigate('MyEvents');
            } else
                Alert.alert('Error', res.data.message);
        }).catch(err => {
            Alert.alert('Error', err.response.data.message);
        });
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={globalStyles.buttonContainer}>
                <Text style={globalStyles.buttonText}>JOIN</Text>
            </View>
        </TouchableOpacity>
    );
}