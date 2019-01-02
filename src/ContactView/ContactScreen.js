import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-flat-button';
import email from 'react-native-email';

import { ContactStyles as Styles } from './ContactStyles';
import Colors from '../constants/colors';
import Header from '../common/Header';

class ContactScreen extends Component {
    handleEmail() {
        email('kevinqiu96@gmail.com', {
            subject: 'Spirit Island Companion - <CONTEXT HERE>'
        })
            .catch();
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Header title={'Contact'} navigation={navigation} navStyle={'drawer'} />
                <View style={Styles.container}>
                    <Text style={Styles.title}>Got any suggestions, bugs, or questions about the app? Shoot me an email!</Text>
                    <Button
                        type='custom'
                        onPress={this.handleEmail}
                        backgroundColor={Colors.lightBrown}
                        borderColor={Colors.lightBrownShadow}
                        borderRadius={4}
                        containerStyle={Styles.button}
                        contentStyle={Styles.buttonText}
                    >
                        Email Me!
                    </Button>
                </View>
            </View>

        );
    }
}

export default ContactScreen;