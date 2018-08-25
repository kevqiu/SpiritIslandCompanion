import { StyleSheet } from 'react-native';

const ScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFBEC',
        marginTop: 20
    },
    titleText: {
        color: 'white',
        height: 50,
        fontSize: 28
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
        width: 280,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        fontSize: 28,
        fontFamily: 'ReemKufi',
        color: 'black'
    },
    buttonContainer: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    counterImage: {
        width: 60,
        height: 60
    }
});

export { TrackerStyles, ScreenStyles };
