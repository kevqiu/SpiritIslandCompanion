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
        paddingBottom: 20,
        backgroundColor: Colors.lightYellow
    },
    scrollContainer: {
        flex: 1,
    },
    sectionText: {
        flex: 1,
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
        backgroundColor: 'black'
    },
    tableText: {
        fontFamily: 'ReemKufi',
        color: 'black',
        textAlign: 'center',
        margin: 2
    }
});

export { ScenarioStyles };