import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { loginStyles } from '../styles/LoginStyles';


export default function LoginForm({ login }) {
    const handlePress = () => {
        login(true);
    }
    return (
        <View style={loginStyles.formContainer}>
            <TextInput 
                style={loginStyles.input}
                placeholder='email'
                keyboardType='email-address'
            />
            <TextInput 
                style={loginStyles.input}
                placeholder='password'
                secureTextEntry
            />
            <TouchableOpacity style={loginStyles.buttonContainer} onPress={handlePress}>
                <Text style={loginStyles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}


