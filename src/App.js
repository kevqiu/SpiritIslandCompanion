import React, { Component } from 'react';
import { View } from 'react-native';

import ElementsView from './elements/ElementsView'
import Styles from './stylesheets/AppStyles'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Styles.container}>
                <ElementsView />
            </View>
        );
    }
}

export default App;