import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Header from '../common/Header';
import { ScreenStyles as Styles } from './FaqStyles'

class FaqScreen extends Component {
    constructor(props) {
        super(props);

        this.webView = React.createRef();
        this.onBack = this.onBack.bind(this);
        this.onForward = this.onForward.bind(this);
        this.onNavigationStateChange = this.onNavigationStateChange.bind(this);

        this.state = {
            canGoBack: false,
            canGoForward: false,
        }
    }

    onBack() {
        this.webView.current.goBack();
    }

    onForward() {
        this.webView.current.goForward();
    }

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack,
            canGoForward: navState.canGoForward
        });
    }

    render() {
        let { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Header title={'FAQ'} navigation={navigation} navStyle={'drawer'} />
                <View style={Styles.container}>
                    <WebView
                        ref={this.webView}
                        source={{ uri: 'https://querki.net/u/darker/spirit-island-faq/' }}
                        startInLoadingState={true}
                        onNavigationStateChange={this.onNavigationStateChange}
                    />
                    <View style={Styles.faqButtons}>
                        <TouchableOpacity style={Styles.faqButton} disabled={!this.state.canGoBack} onPress={this.onBack}>
                            <Icon color={'black'} style={Styles.faqIcon} name='arrow-left' size={30}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.faqButton} disabled={!this.state.canGoForward} onPress={this.onForward}>
                            <Icon color={'black'} style={Styles.faqIcon} name='arrow-right' size={30}></Icon>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}

export default FaqScreen;