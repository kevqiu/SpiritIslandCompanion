import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { ScenarioStyles as Styles } from './ScenarioStyles';

class ScenarioScreen extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.welcome}>Welcome to the</Text>
                <Text style={Styles.welcome}>Spirit Island Companion!</Text>
            </View>
        );
    }
}

export default ScenarioScreen;