import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

class Divider extends Component {
    render() {
        return (
            <View style={Styles.divider} />
        )
    }
}

const Styles = StyleSheet.create({
    divider: {
        backgroundColor: Colors.lightBrown,
        width: '10%',
        height: 1,
        marginVertical: 6
    },
})

export default Divider;