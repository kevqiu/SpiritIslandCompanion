import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import { responsiveWidth } from 'react-native-responsive-dimensions';

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
        width: responsiveWidth(10),
        height: 2,
        marginVertical: 6
    },
})

export default Divider;