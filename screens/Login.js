import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';
import { globalStyles } from '../styles/GlobalStyles';
import { loginStyles } from '../styles/LoginStyles';
import { Entypo } from '@expo/vector-icons';


export default function Login() {
    const [register, setRegister] = useState(false);
    
    const handlePress = () => {
        setRegister(!register);
    }
    
    const form = register ? (
        <View style={loginStyles.container} >
            <Entypo name='back' color='#0c7070' size={40} style={loginStyles.backButton} onPress={handlePress} />
            <RegisterForm />
        </View>
    ) : (
        <View style={loginStyles.container} >
            <View style={loginStyles.iconContainer}>
                <Image source={require('../assets/logo.png')} style={loginStyles.icon} />
            </View>
            <LoginForm />
            <View style={loginStyles.formContainer}>
                <TouchableOpacity style={globalStyles.buttonContainer} onPress={handlePress}>
                    <Text style={globalStyles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View> 
    );

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={loginStyles.container} >
            {form}           
        </TouchableWithoutFeedback>
    )
}
