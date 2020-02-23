import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    card: {
        borderRadius: 5,
        elevation: 5,
        backgroundColor: 'white',
        margin: 8,
        padding: 20,
        alignItems: 'center'
    }
});

export const images = {
    levels: {
      '1': require('../assets/level-1.png'),
      '2': require('../assets/level-2.png'),
      '3': require('../assets/level-3.png'),
      '4': require('../assets/level-4.png'),
      '5': require('../assets/level-5.png'),
    }
};