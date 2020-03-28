import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { loginStyles } from '../styles/LoginStyles';
import { AuthContext } from '../contexts/AuthContext';
import { login } from '../api/endpoints';

const loginSchema = yup.object({
    email: yup
        .string()
        .required('Enter your email')
        .email('Email is not valid'),
    password: yup
        .string()
        .required('Enter your password')
});

export default function LoginForm() {
    const { dispatch } = useContext(AuthContext);
    const [showMessage, setShowMessage] = useState();
    const [message, setMessage] = useState('');

    const signIn = (email, password) => {
        login(email, password).then(res => {
            if (res.status === 200) {
                dispatch({type: 'LOGIN', user: res.data});
            }
        }).catch(err => {
            if (err.response) {
                setMessage(err.response.data.message);
            } else {
                setMessage('Request failed.');
            }
            setShowMessage(true);
        });
    }

    return (
        <View style={loginStyles.formContainer}>
            {showMessage && 
                <TouchableOpacity onPress={() => {setShowMessage(false)}}>
                    <View style={loginStyles.messageContainer}>
                        <Text style={loginStyles.messageText}>{message}</Text>
                    </View>
                </TouchableOpacity>
            }
            <Formik 
                initialValues={{email: '', password: ''}}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                    signIn(values.email, values.password, actions);
                    Keyboard.dismiss();
                }}
            >
                {formikProps => (
                    <View>
                        <TextInput 
                            style={loginStyles.input}
                            placeholder='Email'
                            keyboardType='email-address'
                            autoCapitalize = 'none'
                            onChangeText={formikProps.handleChange('email')}
                            onBlur={formikProps.handleBlur('email')}
                            value={formikProps.values.email}
                        />
                        <Text style={loginStyles.errorText}>{formikProps.touched.email && formikProps.errors.email}</Text>
                        
                        <TextInput 
                            style={loginStyles.input}
                            placeholder='Password'
                            secureTextEntry
                            autoCapitalize = 'none'
                            onChangeText={formikProps.handleChange('password')}
                            onBlur={formikProps.handleBlur('password')}
                            value={formikProps.values.password}
                        />
                        <Text style={loginStyles.errorText}>{formikProps.touched.password && formikProps.errors.password}</Text>

                        <TouchableOpacity style={loginStyles.buttonContainer} onPress={formikProps.handleSubmit}>
                            <Text style={loginStyles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                )}

            </Formik>
        </View>
    )
}


