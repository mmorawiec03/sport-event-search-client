import React, { useContext, useState } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Picker } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { loginStyles } from '../styles/LoginStyles';
import { AuthContext } from '../contexts/AuthContext';
import { Formik } from 'formik';
import * as yup from 'yup';
import { addEvent } from '../api/endpoints';

const addEventSchema = yup.object({
    name: yup
        .string()
        .required('Event name is required'),
    description: yup
        .string(),
    date: yup
        .string()
        .required('Date is required')
        .test('is-date', 'Date must be in format DD.MM.YYYY', val => {
            const date = /^([0-9]{2}.[0-9]{2}.[0-9]{4})$/;
            return date.test(val);
        }),
    hour: yup
        .string()
        .required('Hour is required')
        .test('is-hour', 'Hour must be in format HH:MM', val => {
            const hour = /^([0-9]{2}:[0-9]{2})$/;
            return hour.test(val);
        }),
    address: yup
        .string()
        .required('Address is required'),
    discipline: yup
        .string()
        .default('Other'),
    level: yup
        .string(),
    participantsLimit: yup
        .number()
        .required('Participants limit is required')
        .min(1)
});


export default function AddEventForm({ closeModal }) {

    const { authData } = useContext(AuthContext);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');

    const submitHandler = (values, actions) => {
        const event = {
            owner: {
                userId: authData.user._id,
                fullName: authData.user.fullName,
                email: authData.user.email,
                phoneNumber: authData.user.phoneNumber
            },
            level: parseInt(values.level),
            ...values
        }
        addEvent(event).then(res => {
            actions.resetForm();
            if (res.status === 200) {
                closeModal();
            }
        }).catch(err => {
            console.log(err);
            if (err.response) {
                setMessage(err.response.data.message);
            } else {
                setMessage('Request failed.');
            }
            setShowMessage(true);
        });
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={loginStyles.formContainer}>
                {showMessage && 
                    <TouchableOpacity onPress={() => {setShowMessage(false)}}>
                        <View style={loginStyles.messageContainer}>
                            <Text style={loginStyles.messageText}>{message}</Text>
                        </View>
                    </TouchableOpacity>
                }
                <Formik 
                    initialValues={{
                        name: '',
                        description: '',
                        date: '',
                        hour: '',
                        address: '',
                        discipline: '',
                        level: '',
                        participantsLimit: ''
                    }}
                    validationSchema={addEventSchema}
                    onSubmit={(values, actions) => {
                        submitHandler(values, actions);
                        Keyboard.dismiss();
                    }}
                >
                    {formikProps => (
                        <View>
                            <TextInput
                                style={loginStyles.input}
                                placeholder='Event name'
                                onChangeText={formikProps.handleChange('name')}
                                onBlur={formikProps.handleBlur('name')}
                                value={formikProps.values.name}
                            />
                            <Text style={loginStyles.errorText}>{formikProps.touched.name && formikProps.errors.name}</Text>

                            <TextInput 
                                style={loginStyles.input}
                                placeholder='Description'
                                onChangeText={formikProps.handleChange('description')}
                                onBlur={formikProps.handleBlur('description')}
                                value={formikProps.values.description}
                                multiline={true}
                                numberOfLines={4}
                            />
                            <Text style={loginStyles.errorText}>{formikProps.touched.description && formikProps.errors.description}</Text>

                            <TextInput
                                style={loginStyles.input} 
                                placeholder='Date (DD.MM.YYYY)'
                                onChangeText={formikProps.handleChange('date')}
                                onBlur={formikProps.handleBlur('date')}
                                value={formikProps.values.date}
                            />
                            <Text style={loginStyles.errorText}>{formikProps.touched.date && formikProps.errors.date}</Text>

                            <TextInput 
                                style={loginStyles.input}
                                placeholder='Hour (HH:MM)'
                                onChangeText={formikProps.handleChange('hour')}
                                onBlur={formikProps.handleBlur('hour')}
                                value={formikProps.values.hour}
                            />
                            <Text style={loginStyles.errorText}>{formikProps.touched.hour && formikProps.errors.hour}</Text>

                            <TextInput 
                                style={loginStyles.input}
                                placeholder='Address'
                                onChangeText={formikProps.handleChange('address')}
                                onBlur={formikProps.handleBlur('address')}
                                value={formikProps.values.address}
                            />
                            <Text style={loginStyles.errorText}>{formikProps.touched.address && formikProps.errors.address}</Text>

                            <View style={loginStyles.pickerContainer}>
                                <Picker
                                    style={loginStyles.input}
                                    selectedValue={formikProps.values.discipline}
                                    onValueChange={formikProps.handleChange('discipline')} 
                                >
                                    <Picker.Item label="Football" value="Football" />
                                    <Picker.Item label="Volleyball" value="Volleyball" />
                                    <Picker.Item label="Basketball" value="Basketball" />
                                    <Picker.Item label="Handball" value="Handball" />
                                    <Picker.Item label="Running" value="Running" />
                                    <Picker.Item label="Cycling" value="Cycling" />
                                    <Picker.Item label="Fitness" value="Fitness" />
                                    <Picker.Item label="Tennis" value="Tennis" />
                                    <Picker.Item label="Climbing" value="Climbing" />
                                    <Picker.Item label="Boxing" value="Boxing" />
                                    <Picker.Item label="Golf" value="Golf" />
                                    <Picker.Item label="Hockey" value="Hockey" />
                                    <Picker.Item label="Squash" value="Squash" />
                                    <Picker.Item label="Snow sports" value="Snow sports" />
                                    <Picker.Item label="Other" value="Other" />
                                </Picker>
                                <Text style={loginStyles.errorText}>{formikProps.touched.discipline && formikProps.errors.discipline}</Text>
                            </View>

                            <View style={loginStyles.pickerContainer}>
                                <Picker
                                    style={loginStyles.input}
                                    selectedValue={formikProps.values.level}
                                    onValueChange={formikProps.handleChange('level')}
                                >
                                    <Picker.Item label="Level 1" value="1" />
                                    <Picker.Item label="Level 2" value="2" />
                                    <Picker.Item label="Level 3" value="3" />
                                    <Picker.Item label="Level 4" value="4" />
                                    <Picker.Item label="Level 5" value="5" />
                                </Picker>
                                <Text style={loginStyles.errorText}>{formikProps.touched.level && formikProps.errors.level}</Text>
                            </View>

                            <TextInput 
                                style={loginStyles.input}
                                placeholder='Participants limit'
                                onChangeText={formikProps.handleChange('participantsLimit')}
                                onBlur={formikProps.handleBlur('participantsLimit')}
                                value={formikProps.values.participantsLimit}
                                keyboardType='numeric'
                            />
                            <Text style={loginStyles.errorText}>{formikProps.touched.participantsLimit && formikProps.errors.participantsLimit}</Text>

                            <TouchableOpacity style={globalStyles.buttonContainer} onPress={formikProps.handleSubmit}>
                                <Text style={globalStyles.buttonText}>SUBMIT</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                </Formik>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}