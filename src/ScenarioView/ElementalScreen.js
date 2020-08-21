import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import { ScenarioStyles as Styles } from './ScenarioStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

class ElementalScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();
    }
    render() {
        let { navigation } = this.props;

        return (
            <View style={Styles.container} >
                <Header title={'Elemental Invocation'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <View style={Styles.contentContainer}>
                        <CollapsibleSection sectionTitle='Background'>
                            <View>
                                <Text style={Styles.sectionText}>
                                    {'The Spirits can call forth wellsprings of essence to empower small areas of the island, strengthening and aligning nature with a particular element. '}
                                    {'This is fortunate, for the Invaders are encroaching more strongly than before. '}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'RECOMMENDATIONS & NOTES'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'This scenario magnifies the effects of experience: veteran players may find it +0 Difficulty or easier, '}
                                    {'especially with explosive early-game Spirits, while new players may find it +2 or +3 Difficulty.'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY EASIER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for Spirits with Innate Powers that benefit easily from a 1-Element boost (e.g., Starlight Seeks Its Form) '}
                                    {'or are extremely strong or efficient at high levels (e.g., Serpent Slumbering Beneath the Island).'}
                                </Text>
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY HARDER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for Spirits which use few or no Elements for land-targeting Powers (e.g., Vital Strength of the Earth)'}
                                </Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for Spirits with very tight Energy income'}
                                </Text>
                            </View>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Rule Changes'>
                            <Text style={Styles.sectionTextBold}>{'Placing Elements'}</Text>
                            <View style={Styles.sectionSpacer} />
                            <Text style={Styles.sectionText}>
                                {'Once per Spirit Phase, each Spirit may pay Energy to place 1 Element Marker on a corner of one of their lands. '}
                                {'(I.e., at an intersection of 3-4 lands, or of 1+ lands and the Ocean/board edge.) Each corner can hold only 1 Element Marker. They are permanent.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'The cost is 1 Energy, +1 Energy per adjacent corner that already has an Element Marker. ("Adjacent" means "along land boundaries".)'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'Spirits may only place Element Markers which they have on a Power Card in hand, play, or discard. '}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'If you run out of a type of Element Marker, use a substitute piece. '}
                            </Text>
                            <View style={Styles.sectionSpacer} />
                            <Text style={Styles.sectionTextBold}>{'Benefits of Elements'}</Text>
                            <View style={Styles.sectionSpacer} />
                            <Text style={Styles.sectionText}>
                                {'When using a land-targeting Power, the Power gains all Elements on the target land\'s corners, '}
                                {'so elemental thresholds can be reached more easily when targeting certain lands.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'Each Element Marker on the board counts as 2 Energy towards Choice Events aided by that Element.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'Element Markers do not help Spirit-targeting Powers or Special Rules that check how many Elements you have (e.g., Swiftness of Lightning). '}
                                {'The bonus only applies once the Power has targeted a land, so cannot help with, e.g., thresholds that boost Range, or make a Power '}
                                <Image resizeMode='cover' style={IconStyles.Fast} source={require('../Assets/Icons/FastIcon.png')} />
                                {'.'}
                            </Text>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Setup Changes'>
                            <Text style={Styles.sectionText}>
                                {'Get out the Element Markers and place them by the island. On each board, add 1 '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {' to land #6. Add 1 Fear card to Terror Level I. Accelerate the Invader Deck. '}
                                {'(Remove the topmost card of the lowest Invader Stage in the deck. At Setup, this will nearly always be Stage I.)'}
                            </Text>
                        </CollapsibleSection>
                    </View>
                </ScrollView>
            </View >
        );
    }
}

export default ElementalScreen;