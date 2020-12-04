import React,  { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../styles/GlobalStyles';
import { loginStyles } from '../styles/LoginStyles';
import { register } from '../api/endpoints';


const registerSchema = yup.object({
    fullName: yup
        .string()
        .required('This is a required field')
        .min(5, 'Must be at least 5 characters'),
    email: yup
        .string()
        .required('This is a required field')
        .email('Email is not valid'),
    phoneNumber: yup
        .string(),
    password: yup
        .string()
        .required('This is a required field')
        .test('valid-password', 'Must be minimum 8 characters, at least one uppercase, one lowercase, one number and one special character (of the following: @$!%*?&#()_)', val => {
            const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#()_])[A-Za-z\d@$!%*?&#()_]{8,}$/;
            return password.test(val);
        })
});

export default function RegisterForm() {
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');

    const signUp = (newUserData) => {
        register(newUserData).then(res => {
            if (res.status === 200) {
                setMessage(res.data.message);
                setShowMessage(true);
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
                initialValues={{fullName: '', email: '', phoneNumber: '', password: ''}}
                validationSchema={registerSchema}
                onSubmit={(values, actions) => {
                    signUp(JSON.stringify(values));
                    actions.resetForm();
                    Keyboard.dismiss();
                }}
            >
                {formikProps => (
                    <View>
                        <TextInput 
                            style={loginStyles.input}
                            placeholder='Full name'
                            autoCapitalize = 'words'
                            onChangeText={formikProps.handleChange('fullName')}
                            onBlur={formikProps.handleBlur('fullName')}
                            value={formikProps.values.fullName}
                        />
                        <Text style={loginStyles.errorText}>{formikProps.touched.fullName && formikProps.errors.fullName}</Text>

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
                            placeholder='Phone number (optional)'
                            keyboardType='number-pad'
                            onChangeText={formikProps.handleChange('phoneNumber')}
                            onBlur={formikProps.handleBlur('phoneNumber')}
                            value={formikProps.values.phoneNumber}
                        />
                        <Text style={loginStyles.errorText}>{formikProps.touched.phoneNumber && formikProps.errors.phoneNumber}</Text>
                        
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
                        
                        <TouchableOpacity style={globalStyles.buttonContainer} onPress={formikProps.handleSubmit}>
                            <Text style={globalStyles.buttonText}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    )
}