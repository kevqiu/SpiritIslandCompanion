import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import { ScenarioStyles as Styles } from './ScenarioStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

class PowersScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();
    }
    render() {
        let { navigation } = this.props;

        return (
            <View style={Styles.container} >
                <Header title={'Powers Long Forgotten'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <Image resizeMode='contain' style={Styles.headerImage} source={require('./assets/powers.png')} />
                    <View style={Styles.contentContainer}>
                        <CollapsibleSection sectionTitle='Background'>
                            <View>
                                <Text style={Styles.sectionText}>
                                    {'There are sources of power on the Island best left undisturbed, their locations deliberately hidden and forgotten. '}
                                    {'Even with the current threat of the Invaders you would leave them be - '}
                                    {'except that the Invaders seem to be aware of their existence and are hunting for them! '}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY EASIER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for spirits with good '}
                                    <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                    {' movement (e.g., Thunderspeaker)'}
                                </Text>
                            </View>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Rule Changes'>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Whenever a land has 3 '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                {' or more in it, the players search it.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Whenever a land has 2 Invaders or more, the Invaders search it. '}
                                {'French Plantation Colony, it instead takes 3 Invaders or more to search.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 When a land is searched, turn its Scenario token face-up. If it does not have a number, discard it. '}
                                {'If it does have a number, something has been found!'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Consult the reverse side of this card for what it does. '}
                                {'Put the token above the appropriate column to show which side discovered it, '}
                                {'unless the description indicates it should stay in the land where it was found.'}
                            </Text>

                            <Text style={Styles.sectionText}>
                                {'\u2022 When you find a source of power, you may choose to hold off on using its ability. '}
                                {'If you are playing with scoring, you score +2 points for each one you find but never use.'}
                            </Text>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Setup Changes'>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Mix up (face-down) Scenario Markers numbered 1-8. Take one, plus another one per player, without looking at them.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Take 3 non-numbered Scenario Markers per player, less one.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Shuffle them all together, and put 4 face-down on each board, in lands without '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                            </Text>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Powers' scrollView={this.scrollView}>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'1: '}</Text>
                                {'A Lizard\'s scale, perpetually burning'}
                            </Text>
                            <View style={Styles.paragraph}>
                                <Text style={Styles.sectionTextBold}>{'Invader Benefit'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'Powers granting '}
                                    <Image resizeMode='cover' style={IconStyles.Element} source={require('./assets/icons/FireIcon.png')} />
                                    {' don\'t Damage/Destroy Invaders unless the Spirit spends an additional Energy. (Per Power)'}
                                </Text>
                                <Text style={Styles.sectionTextBold}>{'Spirit Benefit'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'Damage-dealing Powers granting '}
                                    <Image resizeMode='cover' style={IconStyles.Element} source={require('./assets/icons/FireIcon.png')} />
                                    {' do +1 Damage. (Total bonus per power)'}
                                </Text>
                            </View>
                            <View style={Styles.sectionSpacer} />

                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'2: '}</Text>
                                {'A loop of twisted bronze set with deep red stones'}
                            </Text>
                            <View style={Styles.paragraph}>
                                <Text style={Styles.sectionTextBold}>{'Invader Benefit'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'For purposes of Explore and Build, Invaders in any Sands are considered to be in all Sands'}
                                </Text>
                                <Text style={Styles.sectionTextBold}>{'Spirit Benefit'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'Spirits may shift their '}
                                    <Image resizeMode='cover' style={IconStyles.Presence} source={require('./assets/icons/PresenceIcon.png')} />
                                    {' from a Sands to another at any time'}
                                </Text>
                            </View>
                            <View style={Styles.sectionSpacer} />

                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'3: '}</Text>
                                {'An enormous jagged tooth, dripping water'}
                            </Text>
                            <View style={Styles.paragraph}>
                                <Text style={Styles.sectionTextBold}>{'Invader Benefit'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'Whenever Invaders Explore into Wetland, they immediately Build there.'}
                                </Text>
                                <Text style={Styles.sectionTextBold}>{'Spirit Benefit'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'Each Spirit gains +2 Energy during any Spirit Phase that they do not Reclaim any cards.'}
                                </Text>
                            </View>
                            <View style={Styles.sectionSpacer} />

                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'4: '}</Text>
                                {'A rib-bone crusted with unmelting ice'}
                            </Text>
                            <View style={Styles.paragraph}>
                                <Text style={Styles.sectionTextBold}>{'Invader Benefit'}</Text>
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'Next Turn: '}</Text>
                                    {'Spirits only get 1 Card Play.'}
                                </Text>
                                <Text style={Styles.sectionTextBold}>{'Spirit Benefit'}</Text>
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'During the next normal Ravage: '}</Text>
                                    {'Invaders do -3 Damage per land.'}
                                </Text>
                            </View>
                            <View style={Styles.sectionSpacer} />

                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'5: '}</Text>
                                {'A fist-sized ember, glowing steadily'}
                            </Text>
                            <View style={Styles.paragraph}>
                                <Text style={Styles.sectionTextBold}>{'Invader Benefit'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'Whenever a '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                    {' / '}
                                    <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                    {' is added to a Jungle or Wetland without '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                    {' / '}
                                    <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                    {' , also add 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                </Text>
                                <Text style={Styles.sectionTextBold}>{'Spirit Benefit'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'Spirits do not need to Forget when gaining a Major Power.'}
                                </Text>
                            </View>
                            <View style={Styles.sectionSpacer} />

                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'6: '}</Text>
                                {'A rope woven out of the wind'}
                            </Text>
                            <View style={Styles.paragraph}>
                                <Text style={Styles.sectionTextBold}>{'Invader Benefit'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'Powers do not Gather/Push Invaders unless the Spirit spends an extra Energy (Per Power)'}
                                </Text>
                                <Text style={Styles.sectionTextBold}>{'Spirit Benefit'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'All Powers have '}
                                    <Image resizeMode='cover' style={IconStyles.Range} source={require('./assets/icons/Range_1.png')} />
                                </Text>
                            </View>
                            <View style={Styles.sectionSpacer} />

                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'7: '}</Text>
                                {'A spear-like pillar of sunlight, too hot to approach'}
                            </Text>
                            <View style={Styles.paragraph}>
                                <Text style={Styles.sectionTextBold}>{'Invader Benefit'}</Text>
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'Now: '}</Text>
                                    {'On each board, in the land with the most '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('./assets/icons/TownIcon.png')} />
                                    {' / '}
                                    <Image resizeMode='cover' style={IconStyles.City} source={require('./assets/icons/CityIcon.png')} />
                                    {' (minimum 1): Destroy all '}
                                    <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                    {' and spirit tokens. Add 1 '}
                                    <Image resizeMode='cover' style={IconStyles.Blight} source={require('./assets/icons/BlightIcon.png')} />
                                </Text>
                                <Text style={Styles.sectionTextBold}>{'Spirit Benefit'}</Text>
                                <Text style={Styles.sectionText}>
                                    <Text style={Styles.sectionTextBold}>{'Now: '}</Text>
                                    {'Earn 2 Fear Cards. Invaders in 1 Land take 2 Damage per '}
                                    <Image resizeMode='cover' style={IconStyles.Dahan} source={require('./assets/icons/DahanIcon.png')} />
                                    {' there.'}
                                </Text>
                            </View>
                            <View style={Styles.sectionSpacer} />
                        </CollapsibleSection>



                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default PowersScreen;