import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { cardContentStyles } from '../styles/CardContentStyles';
import { AuthContext } from '../contexts/AuthContext';
import Card from '../shared/Card';

export default function MyProfile() {
    const { authData } = useContext(AuthContext);

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={cardContentStyles.nameText}>{authData.user.fullName}</Text>
            </Card>
            <Card>
                <Text style={cardContentStyles.labelText}>Email address</Text>
                <Text style={cardContentStyles.detailsText}>{authData.user.email}</Text>
            </Card>
            <Card>
                <Text style={cardContentStyles.labelText}>Phone number</Text>
                <Text style={cardContentStyles.detailsText}>{authData.user.phoneNumber}</Text>
            </Card>
            <View style={cardContentStyles.center}>
                <Text>Press any element to edit</Text>
            </View> 
        </View>
    );
}
