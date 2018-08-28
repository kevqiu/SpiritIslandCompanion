import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const ScreenStyles = StyleSheet.create({
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
    resetButtonContainer: {
        height: 90,
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
    }
});

const TrackerStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    elementContainer: {
        flex: 1,
        alignItems: 'center'
    },
    elementImage: {
        width: 65,
        height: 65
    },
    counterContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterText: {
        fontSize: 36,
        fontFamily: 'ReemKufi',
        color: 'black'
    },
    buttonContainer: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    counterImage: {
        width: 55,
        height: 55
    }
});

export { TrackerStyles, ScreenStyles };
