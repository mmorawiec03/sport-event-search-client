import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#e2eddd'
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
    }
});
