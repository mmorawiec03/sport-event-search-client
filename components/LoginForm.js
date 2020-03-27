import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { loginStyles } from '../styles/LoginStyles';
import { AuthContext } from '../contexts/AuthContext';

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
    return (
        <View style={loginStyles.formContainer}>
            <Formik 
                initialValues={{email: '', password: ''}}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                    console.log(`logged as ${values.email}`);
                    // api.post(/login......)
                    actions.resetForm();
                    Keyboard.dismiss();
                    dispatch({type: 'LOGIN'});
                }}
            >
                {formikProps => (
                    <View>
                        <TextInput 
                            style={loginStyles.input}
                            placeholder='Email'
                            keyboardType='email-address'
                            onChangeText={formikProps.handleChange('email')}
                            onBlur={formikProps.handleBlur('email')}
                            value={formikProps.values.email}
                        />
                        <Text style={loginStyles.errorText}>{formikProps.touched.email && formikProps.errors.email}</Text>
                        
                        <TextInput 
                            style={loginStyles.input}
                            placeholder='Password'
                            secureTextEntry
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


