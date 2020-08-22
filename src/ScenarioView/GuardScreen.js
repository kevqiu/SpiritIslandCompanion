import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image'

import { ScenarioStyles as Styles } from './ScenarioStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

class GuardScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();
    }
    render() {
        let { navigation } = this.props;

        return (
            <View style={Styles.container} >
                <Header title={'Guard the Isle\'s Heart'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <FullWidthImage source={require('../Assets/guard.png')} width={600} height={464} />
                    <View style={Styles.contentContainer}>
                        <CollapsibleSection sectionTitle='Background'>
                            <View>
                                <Text style={Styles.sectionText}>
                                    {'The Invaders have found the center of the island\'s power, and if they lay down roots there, '}
                                    {'the heart of the island will be shattered. You must act decisively in order to save your home, '}
                                    {'and in your haste to mount a defense, you reach out for whatever source of power you can find. '}
                                    {'With your newfound strength, fight back the invaders!'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY EASIER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for Spirits with easy Build prevention (e.g., A Spread of Rampant Green)'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY HARDER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for Spirits with no Buid prevention or Fast way to destroy '}
                                    <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                    {' (e.g., Bringer of Dreams and Nightmares)'}
                                </Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 against Adversaries who act quickly (e.g., Kingdom of Brandenburg-Prussia)'}
                                </Text>
                            </View>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Rule Changes'>
                            <Text style={Styles.sectionTextBold}>{'Inner Lands'}</Text>
                            <Text style={Styles.sectionText}>
                                {'There is 1 inner land on each board: '}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 '}
                                <Text style={Styles.sectionTextBold}>{'1-2 player(s): '}</Text>
                                {'Land #7 on each board.                                                                            '}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 '}
                                <Text style={Styles.sectionTextBold}>{'3 players: '}</Text>
                            </Text>
                            <Image resizeMode='cover' source={require('../Assets/Icons/Inner_Lands_3.png')} />

                            <Text style={Styles.sectionText}>
                                {'\u2022 '}
                                <Text style={Styles.sectionTextBold}>{'4 players: '}</Text>
                            </Text>
                            <Image resizeMode='cover' source={require('../Assets/Icons/Inner_Lands_4.png')} />
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Setup Changes' scrollView={this.scrollView}>
                            <Text style={Styles.sectionText}>
                                {'After all other setup: '}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Remove all '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 In each Inner Land (see Rules Changes) add 1 '}
                                <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                {' and 1 '}
                                <Image resizeMode='cover' style={IconStyles.Presence} source={require('../Assets/Icons/PresenceIcon.png')} />
                                {' from the player starting on that board. (If this is illegal, as for Ocean\'s Hungry Grasp, add the '}
                                <Image resizeMode='cover' style={IconStyles.Presence} source={require('../Assets/Icons/PresenceIcon.png')} />
                                {' in the nearest legal land on that board.)'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Each Spirit starts with 2 additional Power Cards, by drawing a single card from each of the 2 Power Decks. '}
                            </Text>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Additional Loss Condition' scrollView={this.scrollView}>
                            <Text style={Styles.sectionText}>
                                {'Anytime after Turn 1: There is a '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {' / '}
                                <Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
                                {' in an Inner Land.                                             '}
                            </Text>
                        </CollapsibleSection>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default GuardScreen;