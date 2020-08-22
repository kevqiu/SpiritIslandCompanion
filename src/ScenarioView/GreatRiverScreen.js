import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import { ScenarioStyles as Styles } from './ScenarioStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

class GreatRiverScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();
    }
    render() {
        let { navigation } = this.props;

        return (
            <View style={Styles.container} >
                <Header title={'The Great River'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <View style={Styles.contentContainer}>
                        <CollapsibleSection sectionTitle='Background'>
                            <View>
                                <Text style={Styles.sectionText}>
                                    {'The island is vast, and the Invaders are firmly entrenched in its western lands. They now seek to push easy across a mighty river and open up a new frontier. Can the Spirits hold them back?'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'RECOMMENDATIONS & NOTES'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 This Scenario uses the balanced boards only.'}
                                    {'\u2022 Boards B, C, and F are best for this Scenario, then Board D. Boards A and E are easier.'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY EASIER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for Spirits excellent at destroying Inland '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                    {' (e.g., Lightning\'s Swift Strike). '}
                                </Text>
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY HARDER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for teams with little early control of Inland '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                </Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for Spirits that focus on defense/counterattack to the exclusion of Destroying/moving Invaders (e.g., Vital Strength of the Earth).'}
                                </Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 against Adversaries that create lots of extra '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                </Text>
                            </View>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Rule Changes'>
                            <Text style={Styles.sectionTextBold}>{'Population Spills Across the River'}</Text>
                            <View style={Styles.sectionSpacer} />
                            <Text style={Styles.sectionText}>
                                {'After the Build Step, Invaders Explore into all Coastal lands without '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {' / '}
                                <Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
                                {' but with '}
                                <Image resizeMode='cover' style={IconStyles.Explorer} source={require('../Assets/Icons/ExplorerIcon.png')} />
                                {' .'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'After the Explore Step, Invaders Explore into all Coastal lands withoutt '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {' / '}
                                <Image resizeMode='cover' style={IconStyles.City} source={require('../Assets/Icons/CityIcon.png')} />
                                {' .'}
                            </Text>
                            <View style={Styles.sectionSpacer} />
                            <Text style={Styles.sectionTextBold}>{'Relentless Migration Eastwards'}</Text>
                            <View style={Styles.sectionSpacer} />
                            <Text style={Styles.sectionText}>
                                {'At the end of the '}
                                <Image resizeMode='cover' style={IconStyles.Slow} source={require('../Assets/Icons/SlowIcon.png')} />
                                {' phase, move each '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {' one land Inland (farther away from the Ocean). Start with the most-Inland lands and work your way to the least-Inland. '}
                                {'(You can mark the lands that are Range 2 from the Ocean with Scenario Markers to make this easier, if desired.)'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 When '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {' in a land have a choice of multiple lands to go to, split them as evenly as possible, starting from the northernmost (upper) such land. '}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 When a '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {' would be prevented from moving Inland by Isolate effects, it ignores those Isolate effects unless a Spirit pays 1 Energy.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 When a '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {' cannot move further Inland, if it is on the eastern (right-hand) edge of its board, move it off the eastern edge and onto this Scenario Card. Otherwise, it moves to an equally Inland adjacent land (if possible). '}
                            </Text>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Setup Changes'>
                            <Text style={Styles.sectionText}>
                                {'Place Island Boards touching top-to-bottom, so their Oceans are on the same side. (The "Oceans" represent an immense river in the west.)'}
                            </Text>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Additional Loss Condition'>
                            <Text style={Styles.sectionText}>
                                {'If more than 3 '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {' per player escape off the edge of the map (are on this Scenario Card), the Invaders win.'}
                            </Text>
                        </CollapsibleSection>
                    </View>
                </ScrollView>
            </View >
        );
    }
}

export default GreatRiverScreen;