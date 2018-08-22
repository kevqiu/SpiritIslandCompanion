import { StyleSheet } from 'react-native';

const ComponentStyles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    elementText: {
        color: 'black',
        fontSize: 20,
    },
});


const ViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    resetButtonContainer: {
        height: 90,
        justifyContent: 'center'
    }
});

export { ComponentStyles, ViewStyles };
