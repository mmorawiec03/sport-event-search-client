import { StyleSheet } from 'react-native';


export const customDrawerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222222'
    },
    iconContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerIcon: {
        resizeMode:'contain',
        width: 180,
        height: 180
    },
});