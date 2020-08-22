import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { TrackerStyles as Styles } from './ElementsStyles';

class ElementTracker extends Component {
    render() {
        let { increment, decrement, index, count, icon } = this.props;
        return (
            <View style={Styles.container}>
                <View style={Styles.elementContainer}>
                    <Image style={Styles.elementImage} source={icon} />
                </View>
                <View style={Styles.counterContainer}>
                    <Text style={Styles.counterText}>{count}</Text>
                </View>
                <View style={Styles.buttonContainer}>
                    <TouchableOpacity onPress={() => decrement(index)} underlayColor={'rgba(0,0,0,0)'}>
                        <Image
                            style={Styles.counterImage}
                            source={require('../Assets/Icons/Minus_1.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => increment(index)} underlayColor={'rgba(0,0,0,0)'}>
                        <Image
                            style={Styles.counterImage}
                            source={require('../Assets/Icons/Plus_1.png')}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

export default ElementTracker;