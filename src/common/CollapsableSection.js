import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Colors from '../constants/colors';


class CollapsibleSection extends Component {
    constructor(props) {
        super(props);

        this.toggleCollaspible = this.toggleCollaspible.bind(this);

        this.state = {
            collapsed: true
        };
    }

    toggleCollaspible() {
        this.setState(state => ({ collapsed: !state.collapsed }));
    }

    render() {
        return (
            <View style={Styles.container}>
                <TouchableOpacity style={Styles.titleContainer} onPress={this.toggleCollaspible}>
                    <Text style={Styles.titleText}>{this.props.sectionTitle}</Text>
                </TouchableOpacity>
                <Collapsible collapsed={this.state.collapsed}>
                    <View style={Styles.textContainer}>
                        {this.props.children}
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
        paddingHorizontal: 10,
        backgroundColor: Colors.lightYellow
    }
});

export { CollapsibleSection };