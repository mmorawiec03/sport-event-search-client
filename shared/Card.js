import React from 'react';
import { View, StyleSheet } from 'react-native';


export default function Card(props) {
    return (
        <View style={styles.card}>
            { props.children }
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        elevation: 5,
        backgroundColor: 'white',
        margin: 8,
        padding: 20,
        alignItems: 'center'
    }
});