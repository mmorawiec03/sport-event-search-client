import { StyleSheet } from 'react-native';


export const customDrawerStyles = StyleSheet.create({
    drawer: {
        flex: 1
    },
    iconView: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerIcon: {
        resizeMode:'contain',
        width: 120,
        height: 120
    },
    titleView: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});