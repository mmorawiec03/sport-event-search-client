import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222222'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    column1of2: {
        flex: 0.5,
        alignItems: 'center'
    },
    column1of3: {
        flex: 0.33,
        alignItems: 'center'
    },
    centerContext: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        backgroundColor: '#0c7070',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 5
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    headerText: {
        fontSize: 20,
        color: '#208484',
        marginVertical: 5
    },
    paragraph: {
        fontSize: 16,
        color: 'lightgrey',
        marginRight: 5
    },
});
