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
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

        this.state = {
            counts: [0, 0, 0, 0, 0, 0, 0, 0]
        };
    }

    increment(i) {
        const newCounts = [...this.state.counts];
        newCounts[i] = newCounts[i] + 1;
        this.setState({ counts: newCounts });
    }

    decrement(i) {
        if (this.state.counts[i] > 0) {
            const newCounts = [...this.state.counts];
            newCounts[i] = newCounts[i] - 1;
            this.setState({ counts: newCounts });
        }
    }

    resetAll() {
        this.setState({
            counts: [0, 0, 0, 0, 0, 0, 0, 0]
        });
    }

    render() {
        let { counts } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <Header title={'Element Tracker'} navigation={this.props.navigation} navStyle={'drawer'} />
                <View style={Styles.container}>
                    <ElementTracker increment={this.increment} decrement={this.decrement} count={counts[0]} index={0} icon={require('../Assets/Icons/SunIcon.png')} />
                    <ElementTracker increment={this.increment} decrement={this.decrement} count={counts[1]} index={1} icon={require('../Assets/Icons/MoonIcon.png')} />
                    <ElementTracker increment={this.increment} decrement={this.decrement} count={counts[2]} index={2} icon={require('../Assets/Icons/FireIcon.png')} />
                    <ElementTracker increment={this.increment} decrement={this.decrement} count={counts[3]} index={3} icon={require('../Assets/Icons/AirIcon.png')} />
                    <ElementTracker increment={this.increment} decrement={this.decrement} count={counts[4]} index={4} icon={require('../Assets/Icons/WaterIcon.png')} />
                    <ElementTracker increment={this.increment} decrement={this.decrement} count={counts[5]} index={5} icon={require('../Assets/Icons/EarthIcon.png')} />
                    <ElementTracker increment={this.increment} decrement={this.decrement} count={counts[6]} index={6} icon={require('../Assets/Icons/PlantIcon.png')} />
                    <ElementTracker increment={this.increment} decrement={this.decrement} count={counts[7]} index={7} icon={require('../Assets/Icons/AnimalIcon.png')} />
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