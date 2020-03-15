import { StyleSheet } from 'react-native';


export const customDrawerStyles = StyleSheet.create({
    drawer: {
        flex: 1
    },
    iconContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerIcon: {
        resizeMode:'contain',
        width: 120,
        height: 120
    },
    titleContainer: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    logoutButton: {
        backgroundColor: '#b5eba0',
        height: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'dimgrey'
    }
});