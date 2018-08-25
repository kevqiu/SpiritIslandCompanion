import React, { Component } from 'react';
import { TouchableHighlight, Text, Image, View } from 'react-native';
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
        this.setState({counter: ++this.state.counter});
    }

    decrement() {
        if (this.state.counter > 0) {
            this.setState({counter: --this.state.counter});            
        }
    }

    reset() {
        this.setState({counter: 0});
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
        let { icon, element } = this.props;
        return (
            <View style={Styles.container}>
                <View style={Styles.textContainer}>
                    <Image style={Styles.elementImage} source={icon} />
                    <View style={Styles.counterContainer}>
                        <Text style={Styles.counterText}>{this.state.counter}</Text>
                    </View>
                </View>
                <View style={Styles.buttonContainer}>
                    <TouchableHighlight onPress={this.increment} underlayColor={'rgba(0,0,0,0)'}>
                        <Image 
                            style={Styles.counterImage} 
                            source={require('./assets/Plus_1.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.decrement} underlayColor={'rgba(0,0,0,0)'}>
                        <Image 
                            style={Styles.counterImage} 
                            source={require('./assets/Minus_1.png')}
                        />
                    </TouchableHighlight>
                </View>
                
            </View>
        );
    }
}

export default ElementTracker;