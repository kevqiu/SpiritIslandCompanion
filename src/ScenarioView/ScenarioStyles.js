import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const ScenarioStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightYellow,
        flexDirection: 'column'
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 20
    },
    scrollContainer: {
        flex: 1,
    },
    sectionText: {
        fontSize: 16,
        fontFamily: 'ReemKufi',
        color: 'black'
    },
    sectionTextBold: {
        fontSize: 16,
        fontFamily: 'ReemKufi',
        color: 'black',
        fontWeight: 'bold'
    },
    sectionSpacer: {
        marginVertical: 3
    },
    paragraph: {
        paddingLeft: 18
    },
    headerImage: {
        width: '100%',
        // height: '100%'
    },
    tableText: {
        fontFamily: 'ReemKufi',
        color: 'black',
        textAlign: 'center',
        margin: 2
    }
});

export { ScenarioStyles };