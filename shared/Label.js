import React from 'react';
import { View } from 'react-native';
import Card from './Card';
import { globalStyles } from '../styles/GlobalStyles';


export default function Label(props) {
    return (
        <Card>
            <View style={globalStyles.labelContainer}>
                { props.children }
            </View>
        </Card>
    );
}
