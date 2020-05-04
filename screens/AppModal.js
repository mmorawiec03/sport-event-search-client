import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { MaterialIcons } from '@expo/vector-icons';


export default function AppModal({ children, modalOpen, closeModal }) {
    return (
        <Modal animationType="slide" visible={modalOpen} >
            <View style={globalStyles.container}>
                <View style={styles.closeBtnContainer}>
                    <MaterialIcons
                        name='close'
                        size={36}
                        color='lightgrey'
                        onPress={closeModal}
                    />
                </View>
                { React.cloneElement(children, { closeModal }) }
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    closeBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 5
    },
});