import { StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const RandomSetupStyles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: Colors.lightYellow
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionTextBold: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'ReemKufi',
        color: 'black',
        fontWeight: 'bold',
        marginTop: 10
    },
    countContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    selectorContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    selectorColumn: {
        width: '45%',
    },
    adversaryContainer: {
        width: '60%',
        marginTop: 4
    },
    scenarioContainer: {
        width: '60%',
        marginTop: 4
    },
    checkBox: {
        flex: 1,
        justifyContent: 'center',
        height: 60
    },
    checkBoxText: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'ReemKufi',
        color: 'black',
    },
    buttonContainer: {
        width: '50%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    selectButton: {
        width: 90,
        height: 40,
        marginVertical: 10
    },
    smallButtonText: {
        fontFamily: 'ReemKufi',
        fontWeight: 'normal',
        marginTop: 5,
        color: 'black',
        fontSize: 16
    },
    button: {
        width: 120,
        height: 45,
        marginVertical: 10
    },
    buttonText: {
        fontFamily: 'ReemKufi',
        fontWeight: 'normal',
        marginTop: 5,
        color: 'black',
        fontSize: responsiveFontSize(2.4)
    },
});

export { RandomSetupStyles };