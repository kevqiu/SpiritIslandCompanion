import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

import Colors from '../constants/colors';

const RandomResultsStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightYellow
    },
    sectionContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    boardImageContainer: {
        width: responsiveWidth(50),
        height: responsiveWidth(40)
    },
    boardImage: {
        flex: 1,
        width: null,
        width: null
    },
    boardImage: {
        flex: 1,
        width: null,
        width: null
    },
    sectionTextBold: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'ReemKufi',
        color: 'black',
        fontWeight: 'bold',
        marginTop: 10
    },
    text: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'ReemKufi',
        color: 'black',
        marginTop: 10
    },
});

export { RandomResultsStyles };