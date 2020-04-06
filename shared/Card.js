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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(94, 94, 94, 0.2)',
        margin: 5,
        padding: 20,
        borderRadius: 15,
    }
});