import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Colors from '../constants/colors';


class CollapsibleSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true
        };
    }

    render() {
        return (
            <View style={Styles.container}>
                <TouchableOpacity style={Styles.titleContainer} onPress={() => this.setState({ collapsed: !this.state.collapsed })}>
                    <Text style={Styles.titleText}>{this.props.sectionTitle}</Text>
                </TouchableOpacity>
                <Collapsible collapsed={this.state.collapsed}>
                    <View style={Styles.textContainer}>
                        {this.props.renderSection}

                    </View>
                </Collapsible>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingVertical: 2
    },
    titleContainer: {
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: Colors.darkYellow,
        paddingVertical: 5,
    },
    titleText: {
        fontSize: 19,
        fontFamily: 'ReemKufi',
        color: 'black'
    },
    textContainer: {
        backgroundColor: 'white',
        marginVertical: 8,
        paddingHorizontal: 10
    }
});

export { CollapsibleSection };