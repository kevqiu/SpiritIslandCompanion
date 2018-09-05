import { StyleSheet } from 'react-native';

const ScenarioStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFBEC'
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
    headerImage: {
        width: '100%'
    }
});

export { ScenarioStyles };