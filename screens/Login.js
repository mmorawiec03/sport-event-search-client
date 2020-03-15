import React from 'react';
import { View, Text, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LoginForm from '../components/LoginForm';
import { loginStyles } from '../styles/LoginStyles';


export default function Login({ login }) {
    return (
        <KeyboardAvoidingView behavior='padding' style={loginStyles.container} contentContainerStyle={{backgroundColor: 'red'}}>
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
                <View style={loginStyles.iconContainer}>
                    <Image source={require('../assets/app-icon.png')} style={loginStyles.icon} />
                    <Text style={loginStyles.title}>Sport Event Search</Text>
                </View>
            </TouchableWithoutFeedback>
            <LoginForm login={login} />
        </KeyboardAvoidingView>
    )
}
