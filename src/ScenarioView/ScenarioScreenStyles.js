import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const ScenarioScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: Colors.lightYellow
    },
    imageStyle: {
        width: 85,
        height: 140,
        marginTop: -20
    }
});

export { ScenarioScreenStyles };