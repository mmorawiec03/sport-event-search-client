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
    label: {
        fontSize: 18,
        fontWeight: 'normal'
    },
    item: {
        height: 70,
        borderBottomWidth: 1,
        borderColor: 'rgba(94, 94, 94, 0.2)'
    }
});