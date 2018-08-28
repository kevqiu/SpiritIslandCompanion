import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const ScoringStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightYellow
    },
    titleText: {
        marginTop: 20,
        marginBottom: 10,
        color: 'black',
        fontSize: 28,
        fontFamily: 'ReemKufi'
    },
    scrollContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider: {
        marginTop: 20
    },
    text: {
        fontSize: 18,
        fontFamily: 'ReemKufi',
        color: 'black'
    },
    selectorContainer: {
        flex: 1,
        width: 300,
        flexDirection: 'row',
        alignItems: 'center'
    },
    selectorText: {
        fontFamily: 'ReemKufi',
        fontSize: 24
    },
    pickerLarge: {
        width: 200,
        alignItems: 'flex-end'
    },
    pickerMedium: {
        width: 120,
        alignItems: 'flex-end'
    },
    pickerSmall: {
        width: 75,
        alignItems: 'flex-end'
    },
    scoreButtonContainer: {
        height: 60,
        justifyContent: 'center'
    },
    buttonContainer: {
        width: 120,
        height: 45
    },
    buttonText: {
        fontFamily: 'ReemKufi',
        fontWeight: 'normal',
        marginTop: 5,
        color: 'black',
        fontSize: 22
    },
    scoreText: {
        fontSize: 24,
        fontFamily: 'ReemKufi',
        color: 'black'
    }
});

export { ScoringStyles };