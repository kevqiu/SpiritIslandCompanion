import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import { AdversaryStyles as Styles } from './AdversaryStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

class SwedenScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();
    }
    render() {
        let { navigation } = this.props;

        return (
            <View style={Styles.container} >
                <Header title={'Sweden'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <Image resizeMode='contain' style={Styles.headerImage} source={require('./assets/Sweden_Map.png')} />
                    <View style={Styles.contentContainer}>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SwedenScreen;