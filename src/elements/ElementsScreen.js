import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-flat-button';

import ElementTracker from './ElementTracker';
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
        this.setState({
            reset: !this.state.reset
        });
    }

    render() {
        let { reset } = this.state;
        return (
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
                        backgroundColor={'#AE966C'}
                        borderColor={'#5E513B'}
                        borderRadius={4}
                        containerStyle={Styles.buttonContainer}
                        contentStyle={Styles.buttonText}
                    >
                        Reset
                    </Button>
                </View>
            </View>
        );
    }
}

export default ElementsScreen;