import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { AuthContext } from '../contexts/AuthContext';
import Card from '../shared/Card';

export default function MyProfile() {
    const { authData } = useContext(AuthContext);

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.section}>
                <Card>
                    <View style={globalStyles.labelContainer}>
                        <Text style={globalStyles.headerText}>{authData.user.fullName.toUpperCase()}</Text>
                    </View>
                </Card>
            </View>
            <View style={globalStyles.section}>
                <Card>
                    <View style={globalStyles.labelContainer}>
                        <Text style={globalStyles.labelText}>EMAIL</Text>
                    </View>
                </Card>
                <Card>
                    <View style={globalStyles.labelContainer}>
                        <Text style={globalStyles.paragraph}>{authData.user.email}</Text>
                    </View>
                </Card>
            </View>
            <View style={globalStyles.section}>
                <Card>
                    <View style={globalStyles.labelContainer}>
                        <Text style={globalStyles.labelText}>PHONE NUMBER</Text>
                    </View>
                </Card>
                <Card>
                    <View style={globalStyles.labelContainer}>
                        <Text style={globalStyles.paragraph}>{authData.user.phoneNumber}</Text>
                    </View>
                </Card>
            </View>
        </View>
    );
}
