import React, { Component } from 'react';
import { View } from 'react-native';
import Button from 'react-native-flat-button';

import Colors from '../constants/colors';
import ElementTracker from './ElementTracker';
import Header from '../common/Header';
import { ScreenStyles as Styles } from './ElementsStyles';

class ElementsScreen extends Component {
    constructor(props) {
        super(props);

        this.resetAll = this.resetAll.bind(this);

        this.state = {
            reset: false
        };
    }

    resetAll() {
        this.setState(state => ({
            reset: !state.reset
        }));
    }

    render() {
        let { reset } = this.state;
        return (
            <View style={{flex:1}}>
            <Header title={'Element Tracker'} navigation={this.props.navigation} navStyle={'drawer'} />
                <View style={Styles.container}>
                    <ElementTracker reset={reset} icon={require('./assets/SunIcon.png')}></ElementTracker>
                    <ElementTracker reset={reset} icon={require('./assets/MoonIcon.png')}></ElementTracker>
                    <ElementTracker reset={reset} icon={require('./assets/FireIcon.png')}></ElementTracker>
                    <ElementTracker reset={reset} icon={require('./assets/AirIcon.png')}></ElementTracker>
                    <ElementTracker reset={reset} icon={require('./assets/WaterIcon.png')}></ElementTracker>
                    <ElementTracker reset={reset} icon={require('./assets/EarthIcon.png')}></ElementTracker>
                    <ElementTracker reset={reset} icon={require('./assets/PlantIcon.png')}></ElementTracker>
                    <ElementTracker reset={reset} icon={require('./assets/AnimalIcon.png')}></ElementTracker>
                    <View style={Styles.resetButtonContainer}>
                        <Button
                            type='custom'
                            onPress={this.resetAll}
                            backgroundColor={Colors.lightBrown}
                            borderColor={Colors.lightBrownShadow}
                            borderRadius={4}
                            containerStyle={Styles.buttonContainer}
                            contentStyle={Styles.buttonText}
                        >
                            Reset
                    </Button>
                    </View>
                </View>
            </View>
        );
    }
}

export default ElementsScreen;