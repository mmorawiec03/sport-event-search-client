import { StyleSheet } from 'react-native';


export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //backgroundColor: '#b5eba0'
        backgroundColor: '#e2eddd'
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        resizeMode:'contain',
        height: 120,
        width: 120
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
        height: 40,
        marginBottom: 15,
        paddingHorizontal: 10,
        fontSize: 16,
        color: 'dimgrey'
    },
    buttonContainer: {
        backgroundColor: '#9ec58c',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'dimgrey'
    }
});