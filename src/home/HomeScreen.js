import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { HomeStyles as Styles } from './HomeStyles';

class HomeScreen extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.welcome}>Welcome to the</Text>
                <Text style={Styles.welcome}>Spirit Island Companion!</Text>
            </View>
        );
    }
}

export default HomeScreen;