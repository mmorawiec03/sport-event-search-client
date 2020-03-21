import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { loginStyles } from '../styles/LoginStyles';


export default function RegisterForm({ login }) {
    const handlePress = () => {
        console.log('register');
    }
    return (
        <View style={loginStyles.formContainer}>
            <TextInput 
                style={loginStyles.input}
                placeholder='full name'
            />
            <TextInput 
                style={loginStyles.input}
                placeholder='email'
                keyboardType='email-address'
            />
            <TextInput 
                style={loginStyles.input}
                placeholder='phone number'
                keyboardType='number-pad'
            />
            <TextInput 
                style={loginStyles.input}
                placeholder='password'
                secureTextEntry
            />
            <TouchableOpacity style={loginStyles.buttonContainer} onPress={handlePress}>
                <Text style={loginStyles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    )
}