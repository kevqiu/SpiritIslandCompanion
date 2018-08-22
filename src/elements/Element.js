import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ComponentStyles as Styles } from './ElementsStyles';

class Element extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.elementText}>{this.props.element}</Text>
            </View>
        );
    }
}

export default Element;