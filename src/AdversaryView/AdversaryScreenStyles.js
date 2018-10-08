import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const AdversaryScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: Colors.lightYellow
    },
    imageStyle: {
        width: 85,
        height: 85
    }
});

export { AdversaryScreenStyles };