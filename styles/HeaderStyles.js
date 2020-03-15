import { StyleSheet, Dimensions } from 'react-native';


export const headerStyles = StyleSheet.create({
    header: {
        flex: 1,
        width: Math.round(Dimensions.get('window').width),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    menuIcon: {
        position: 'absolute',
        left: 16
    }
});