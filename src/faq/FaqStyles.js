import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const ScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightYellow
    },
    faqButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    titleText: {
        marginTop: 5,
        color: 'black',
        fontSize: 28,
        fontFamily: 'ReemKufi',
        backgroundColor: Colors.lightYellow

    },
    faqButton: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.lightYellow
    },
    faqIcon: {
        paddingVertical: 8
    }
});

export { ScreenStyles };