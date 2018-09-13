import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { TrackerStyles as Styles } from './ElementsStyles';

class ElementTracker extends Component {
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            counter: 0,
            reset: false
        };
    }

    increment() {
        this.setState(state => ({ counter: ++state.counter }));
    }

    decrement() {
        if (this.state.counter > 0) {
            this.setState(state => ({ counter: --state.counter }));
        }
    }

    reset() {
        this.setState({ counter: 0 });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.reset !== this.state.reset) {
            this.setState({
                counter: 0,
                reset: newProps.reset
            });
        }
    }

    render() {
        let { icon } = this.props;
        return (
            <View style={Styles.container}>
                <View style={Styles.elementContainer}>
                    <Image style={Styles.elementImage} source={icon} />
                </View>
                <View style={Styles.counterContainer}>
                    <Text style={Styles.counterText}>{this.state.counter}</Text>
                </View>
                <View style={Styles.buttonContainer}>
                    <TouchableOpacity onPress={this.decrement} underlayColor={'rgba(0,0,0,0)'}>
                        <Image
                            style={Styles.counterImage}
                            source={require('./assets/Minus_1.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.increment} underlayColor={'rgba(0,0,0,0)'}>
                        <Image
                            style={Styles.counterImage}
                            source={require('./assets/Plus_1.png')}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

export default ElementTracker;