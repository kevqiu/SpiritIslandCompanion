import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Colors from '../constants/colors';

const ContactStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightYellow
    },
    title: {
        fontSize: 24,
        fontFamily: 'ReemKufi',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black',
        width: '80%'
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

export { ContactStyles };