import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image'

import { ScenarioStyles as Styles } from './ScenarioStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

class TerrorScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();
    }
    render() {
        let { navigation } = this.props;

        return (
            <View style={Styles.container} >
                <Header title={'Rituals of Terror'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <FullWidthImage source={require('./assets/terror.png')} width={600} height={464} />
                    <View style={Styles.contentContainer}>
                        <CollapsibleSection sectionTitle='Background'>
                            <View>
                                <Text style={Styles.sectionText}>
                                    {'The Invaders seem resigned to a land of hostility and pain. '}
                                    {'What must their homeland be like to inspire this dogged determination '}
                                    {'to stay despite the deaths of their neighbors, the portents, and omens the spirits blaze across the sky?'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY EASIER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for spirits with strong '}
                                    <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                    {' movement.'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY HARDER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 In a solo game with a Spirit with poor Energy generation or slow Presence placement.'}
                                </Text>
                            </View>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Rule Changes'>
                            <Text style={Styles.sectionText}>
                                {'Terror Levels are not earned via '}
                                <Image resizeMode='cover' style={IconStyles.Fear} source={require('./assets/icons/FearIcon.png')} />
                                {', but by the Ritual of Terror.'}
                            </Text>
                            <View style={Styles.sectionSpacer} />

                            <Text style={Styles.sectionText}>
                                {'Do not resolve earned Fear Cards during the Invader Phase '}
                                {'(If you have trouble remembering this, you can put earned Fear cards on this card instead.)'}
                            </Text>
                            <View style={Styles.sectionSpacer} />

                            <Text style={Styles.sectionText}>
                                {'\u2022 There is a land with at least 1 '}
                                <Image resizeMode='cover' style={IconStyles.Presence} source={require('./assets/icons/PresenceIcon.png')} />
                                {' from each Spirit;'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 That land has at least 3 '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' per player.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 The Spirits collectively spend 3 Energy total and destroy 3 '}
                                <Image resizeMode='cover' style={IconStyles.Presence} source={require('./assets/icons/PresenceIcon.png')} />
                                {' total in that land.'}
                            </Text>
                            <View style={Styles.sectionSpacer} />

                            <Text style={Styles.sectionText}>
                                {'When the Ritual of Terror is Performed:'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Earn the Next Terror Level. (This may be VICTORY on your third Ritual)'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Resolve all earned Fear Cards (at the new Terror Level)'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Push all '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' from the land where the RItual was performed, '}
                                {'distributing them as evenly as possible among all adjacent lands. (I.e; send 1 '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' to each adjacent land before sending a 2nd to any.)'}
                            </Text>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Setup Changes'>
                            <Text style={Styles.sectionText}>
                                {'Put the Terror Level Dividers by the side of the board instead of into the Fear Deck. '}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'Put all Fear Cards into the Fear Deck. If you run out, earn no more Fear Cards.'}
                            </Text>
                        </CollapsibleSection>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default TerrorScreen;