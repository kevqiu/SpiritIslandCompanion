import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { AdversaryStyles as Styles } from './AdversaryStyles';

class AdversaryScreen extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.welcome}>Welcome to the</Text>
                <Text style={Styles.welcome}>Spirit Island Companion!</Text>
            </View>
        );
    }
}

export default AdversaryScreen;