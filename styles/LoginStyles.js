import { StyleSheet } from 'react-native';


export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#e2eddd'
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        flex: 1,
        resizeMode:'contain',
        maxHeight: 150,
        maxWidth: 150,
        marginTop: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8
    },
    formContainer: {
        padding: 20
    },
    input: {
        backgroundColor: '#c8e0bd',
        height: 50,
        paddingHorizontal: 10,
        fontSize: 18,
        color: 'dimgrey'
    },
    buttonContainer: {
        backgroundColor: '#9ec58c',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'dimgrey'
    },
    errorText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'grey',
        textAlign: 'center'
    }
});