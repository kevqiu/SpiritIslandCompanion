import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image'

import { ScenarioStyles as Styles } from './ScenarioStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

class FlameScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();
    }
    render() {
        let { navigation } = this.props;

        return (
            <View style={Styles.container} >
                <Header title={'Rituals of the Destroying Flame'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <FullWidthImage source={require('../Assets/flame.png')} width={600} height={464} />
                    <View style={Styles.contentContainer}>
                        <CollapsibleSection sectionTitle='Background'>
                            <View>
                                <Text style={Styles.sectionText}>
                                    {'The Invaders carry some strange immunity to harm - is it magic of their own? '}
                                    {'Their disbelief in the Spirits as anything other than superstition? '}
                                    {'Or the patronage of some great Spirit, unseen and undetected? '}
                                    {'The Spirits have found a way to break that immunity - but it comes with a price.'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY EASIER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for Spirits that generate lots of Energy (e.g., Keeper of the Forbidden Wilds). '}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY HARDER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for Spirits that rely heavily on Damage/Destruction to keep Invaders in check. '}
                                    {'(e.g., Lightning\'s Swift Strike, Sharp Fangs Behind the Leaves).'}
                                </Text>
                            </View>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Rule Changes'>
                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Invader Immunity: '}</Text>
                                {'Whenever anything would Damage or Destroy Invaders, ignore that Damage/Destruction unless either:'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 There is a Flame Marker within '}
                                <Image resizeMode='cover' style={IconStyles.Range} source={require('../Assets/Icons/Range_1.png')} />
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 The Spirit using the Power or ability pays 2 Energy.'}
                            </Text>

                            <Text style={Styles.sectionText}>
                                {'For non-Spirit effects (Events, '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets/Icons/DahanIcon.png')} />
                                {' counterattacks, etc) any Spirit may pay the Energy. 2 Energy covers a single '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets/Icons/DahanIcon.png')} />
                                {' counterattack, a single land affected by a main/ '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets/Icons/DahanIcon.png')} />
                                {' /token Event, or a single land affected by a Fear Card.'}
                            </Text>
                            <View style={Styles.sectionSpacer} />

                            <Text style={Styles.sectionText}>
                                {'Any Invaders left in an illegal state because they were not destroyed '}
                                {'(e.g., from Ocean\'s Hungry Grasp\'s "Drowning") are moved to the closest land they can legally be in.'}
                            </Text>
                            <View style={Styles.sectionSpacer} />

                            <Text style={Styles.sectionText}>
                                {'Invaders are similarly immune to any effects which would happen instead of Damage/Destruction '}
                                {'(e.g., Bringer of Dreams and Nightmares\' "To Dream a Thousand Deaths")'}
                            </Text>
                            <View style={Styles.sectionSpacer} />

                            <Text style={Styles.sectionText}>
                                <Text style={Styles.sectionTextBold}>{'Ritual of the Destroying Flame: '}</Text>
                                {' Each turn, after all Growth is done, one or more Spirits may perform the Ritual of the Destroying Flame. '}
                                {' Each Spirit performing the Ritual Forgets a Power card that grants '}
                                <Image resizeMode='cover' style={IconStyles.Element} source={require('../Assets/Icons/FireIcon.png')} />
                                {' and chooses a land where they have '}
                                <Image resizeMode='cover' style={IconStyles.Presence} source={require('../Assets/Icons/PresenceIcon.png')} />
                                {' .'}
                            </Text>

                            <Text style={Styles.sectionText}>
                                {'\u2022 Add a Flame Marker and 1 '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                {' to that land (This destroys '}
                                <Image resizeMode='cover' style={IconStyles.Presence} source={require('../Assets/Icons/PresenceIcon.png')} />
                                {' normally.)'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Gain Energy equal to the current Invader Stage.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 If there are Invaders in that land, generate '}
                                <Image resizeMode='cover' style={IconStyles.Fear} source={require('../Assets/Icons/FearIcon.png')} />
                                {' equal to the current Invader Stage, and 1 Damage per '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets/Icons/DahanIcon.png')} />
                                {' present.'}
                            </Text>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Setup Changes'>
                            <Text style={Styles.sectionText}>
                                {'Get out the Scenario Markers; these are used as '}
                                <Text style={Styles.sectionTextBold}>{'Flame Markers'}</Text>
                                {', marking lands where the Ritual of the Destroying Flame has been performed.'}
                            </Text>
                        </CollapsibleSection>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default FlameScreen;