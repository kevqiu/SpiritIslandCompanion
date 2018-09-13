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

const IconStyles = StyleSheet.create({
    Slow: {
        width: 97,
        height: 75
    },
    Fast: {
        width: 97,
        height: 79
    },
    Blight: {
        width: 76,
        height: 80
    },
    Explorer: {
        width: 45,
        height: 80
    },
    Dahan: {
        width: 80,
        height: 77
    },
    Town: {
        width: 80,
        height: 69
    },
    City: {
        width: 80,
        height: 69
    },
    Presence: {
        width: 80,
        height: 40
    },
    Element: {
        width: 90,
        height: 90
    },
    Range: {
        width: 160,
        height: 115
    },
    Fear: {
        width: 75,
        height: 75
    },
    SacredSite: {
        width: 80,
        height: 65
    },
    Beast: {
        width: 80,
        height: 77
    },
    Wild: {
        width: 102,
        height: 82
    },
    Disease: {
        width: 80,
        height: 80
    }
});

export { ScenarioStyles, IconStyles };