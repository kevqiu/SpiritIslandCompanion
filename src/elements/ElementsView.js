import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Element from './Element';
import { ViewStyles as Styles } from './ElementsStyles';

class ElementsView extends Component {
    constructor(props) {
        super(props);

        this.resetAll = this.resetAll.bind(this);

        this.state = { 
            counter: 0 
        };
    }

    resetAll() {
        this.setState({
            counter: ++this.state.counter
        });
    }

    render() {
        return (
            <View style={Styles.container}>
                <Element element={this.state.counter}></Element>
                <Element element={'Moon'}></Element>
                <Element element={'Fire'}></Element>
                <Element element={'Air'}></Element>
                <Element element={'Water'}></Element>
                <Element element={'Earth'}></Element>
                <Element element={'Plant'}></Element>
                <Element element={'Animal'}></Element>
                <View style={Styles.resetButtonContainer}>
                    <Button onPress={this.resetAll} title='Reset All'></Button>
                </View>
            </View>
        );
    }
}

export default ElementsView;