import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

class DrawerHeader extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Image
                    style={Styles.appImage} 
                    source={require('./assets/app-icon.png')}
                />
                <View style={Styles.titleContainer}>
                <Text style={Styles.titleTop}>Spirit Island</Text>
                <Text style={Styles.titleBottom}>Companion</Text>
                </View>

            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 10,
        marginLeft: 16
    },
    titleContainer: {
        flexDirection: 'column',
        marginLeft: 16,
        marginTop: 6
    },
    titleTop: {
        fontSize: 24,
        fontFamily: 'ReemKufi',
        textAlign: 'center',
        color: 'black'
    },
    titleBottom: {
        fontSize: 24,
        fontFamily: 'ReemKufi',
        textAlign: 'center',
        color: 'black',
        marginTop: -8
    },
    appImage: {
        height: 70,
        width: 70,
    }
});

export default DrawerHeader;