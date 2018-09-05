import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import { ScenarioStyles as Styles } from './ScenarioStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

class BlitzScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loreCollapsed: false,
            setupCollapsed: false,
        };
    }
    render() {
        let { navigation } = this.props;

        return (
            <View style={{flex: 1}} >
                <Header title={'Blitz'} navigation={navigation} navStyle={'back'} />
                <ScrollView >
                    <View>
                        <Image resizeMode='cover' style={Styles.headerImage} source={require('./assets/blitz.png')} />

                    </View>

                    <View style={Styles.container}>
                        <CollapsibleSection sectionTitle='Background'
                            renderSection={
                                <View>
                                    <Text style={Styles.sectionText}>Perhaps the Spirits of the Island are not so slow after all. But still, the Invaders are faster.</Text>
                                    <View style={Styles.sectionSpacer} />
                                    <Text style={Styles.sectionTextBold}>THIS SCENARIO IS NOTABLY HARDER</Text>
                                    <Text style={Styles.sectionText}>{'\u2022'} for slow-developing Spirits (e.g., The Serpent Slumbering Beneath the Island)</Text>
                                    <Text style={Styles.sectionText}>{'\u2022'} if paired with Brandenburg-Prussia (which pushes tempo in a different way)</Text>
                                    <View style={Styles.sectionSpacer} />
                                    <Text style={Styles.sectionText}>This Scenario can be fun for anyone to try, but is particularly meant for players who find they prefer a more play-and-resolve style of game to the planning ahead required by Spirits <Image source={require('./assets/blitz.png')} /> Powers.</Text>

                                </View>
                            }
                        />
                        <CollapsibleSection sectionTitle='Setup'
                            renderSection={
                                <Text style={Styles.sectionText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                            }
                        />
                        <CollapsibleSection sectionTitle='Rules'
                            renderSection={
                                <Text style={Styles.sectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod mattis sapien, at bibendum felis rutrum ullamcorper. Aenean vestibulum lectus ac quam sodales facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quis leo finibus, imperdiet enim sit amet, fermentum sem. Sed vestibulum imperdiet sodales. Sed tincidunt libero eget vestibulum pulvinar. In hac habitasse platea dictumst. Donec commodo id ipsum sit amet egestas. Donec nec erat sed nulla consectetur interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod mattis sapien, at bibendum felis rutrum ullamcorper. Aenean vestibulum lectus ac quam sodales facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quis leo finibus, imperdiet enim sit amet, fermentum sem. Sed vestibulum imperdiet sodales. Sed tincidunt libero eget vestibulum pulvinar. In hac habitasse platea dictumst. Donec commodo id ipsum sit amet egestas. Donec nec erat sed nulla consectetur interdum.</Text>
                            }
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default BlitzScreen;