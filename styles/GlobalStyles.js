import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
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
    }
});

export const levelImages = {
    levels: {
      '1': require('../assets/level-1.png'),
      '2': require('../assets/level-2.png'),
      '3': require('../assets/level-3.png'),
      '4': require('../assets/level-4.png'),
      '5': require('../assets/level-5.png'),
    }
};