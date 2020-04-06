import React, { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';
import { globalStyles } from '../styles/GlobalStyles';
import { loginStyles } from '../styles/LoginStyles';


export default function Login() {
    const [register, setRegister] = useState(false);
    
    const handlePress = () => {
        setRegister(!register);
    }
    
    const form = register ? (
        <KeyboardAvoidingView behavior='padding' style={loginStyles.container} >
            <RegisterForm />
            <View style={loginStyles.formContainer}>
                <TouchableOpacity style={globalStyles.buttonContainer} onPress={handlePress}>
                    <Text style={globalStyles.buttonText}>LOGIN PAGE</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    ) : (
        <KeyboardAvoidingView behavior='padding' style={loginStyles.container} >
            <View style={loginStyles.iconContainer}>
                <Image source={require('../assets/logo.png')} style={loginStyles.icon} />
            </View>
            <LoginForm />
            <View style={loginStyles.formContainer}>
                <TouchableOpacity style={globalStyles.buttonContainer} onPress={handlePress}>
                    <Text style={globalStyles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView> 
    );

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={loginStyles.container} >
            {form}           
        </TouchableWithoutFeedback>
    )
}
