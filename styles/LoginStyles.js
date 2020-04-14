import { StyleSheet } from 'react-native';


export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        flex: 1,
        resizeMode:'contain',
        maxWidth: 250,
        marginTop: 30
    },
    formContainer: {
        paddingHorizontal: 20
    },
    input: {
        height: 50,
        paddingHorizontal: 10,
        fontSize: 18,
        color: 'lightgrey',
        borderBottomWidth: 1,
        borderBottomColor: 'dimgrey'
    },
    errorText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'grey',
        textAlign: 'center'
    },
    messageContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9b0000',
        paddingHorizontal: 10,
        marginBottom: 10,
        opacity: 0.8,
        borderRadius: 5
    },
    messageText: {
        fontSize: 14,
        color: 'white'
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20
    }
});