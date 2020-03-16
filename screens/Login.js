import React, { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { loginStyles } from '../styles/LoginStyles';


export default function Login({ login }) {
    const [register, setRegister] = useState(false);
    
    const handlePress = () => {
        setRegister(!register);
    }
    
    const form = register ? (
        <KeyboardAvoidingView behavior='padding' style={loginStyles.container} contentContainerStyle={{backgroundColor: 'red'}}>
            <RegisterForm />
        </KeyboardAvoidingView>
    ) : (
        <KeyboardAvoidingView behavior='padding' style={loginStyles.container} contentContainerStyle={{backgroundColor: 'red'}}>
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
                <View style={loginStyles.iconContainer}>
                    <Image source={require('../assets/app-icon.png')} style={loginStyles.icon} />
                    <Text style={loginStyles.title}>Sport Event Search</Text>
                </View>
            </TouchableWithoutFeedback>
            <LoginForm login={login} />
        </KeyboardAvoidingView> 
    );

    return (
        <View style={loginStyles.container}>
            {form}
            <TouchableOpacity style={loginStyles.buttonContainer} onPress={handlePress}>
                <Text style={loginStyles.buttonText}>{register ? ('Login page') : ('Sign up')}</Text>
            </TouchableOpacity>
        </View>
    )
}
