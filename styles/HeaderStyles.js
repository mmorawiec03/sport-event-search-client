import { StyleSheet, Dimensions } from 'react-native';


export const headerStyles = StyleSheet.create({
    header: {
        flex: 1,
        width: Math.round(Dimensions.get('window').width),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#222222',
        paddingHorizontal: 15
    },
    headerTitle: {
        fontSize: 20,
        color: 'white'
    }
});