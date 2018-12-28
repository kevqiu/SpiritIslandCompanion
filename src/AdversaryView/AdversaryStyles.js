import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const AdversaryStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightYellow,
        flexDirection: 'column'
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 20,
        backgroundColor: Colors.lightYellow
    },
    scrollContainer: {
        flex: 1,
    },
    sectionText: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'ReemKufi',
        color: 'black'
    },
    sectionTextBold: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'ReemKufi',
        color: 'black',
        fontWeight: 'bold'
    },
    paragraph: {
        paddingLeft: 18
    },
    headerImage: {
        width: '100%',
        backgroundColor: Colors.lightYellow
    },
    textContainer: {
        marginVertical: 8,
        marginHorizontal: 1,
        paddingHorizontal: 10,
        backgroundColor: Colors.lightYellow,
        width: '100%'
    },
    selectorContainer: {
        flex: 1,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    }
});

export { AdversaryStyles };