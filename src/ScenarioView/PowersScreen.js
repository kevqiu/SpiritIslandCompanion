import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { ScenarioStyles as Styles } from './ScenarioStyles';
import Header from '../common/Header';

class PowersScreen extends Component {
    render() {
        let { navigation } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <Header title={'Powers Long Forgotten'} navigation={navigation} navStyle={'back'} />
                <View style={Styles.container}>

                    <Text>WIP</Text>
                </View>
            </View>
        );
    }
}

export default PowersScreen;