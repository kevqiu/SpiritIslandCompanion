import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import { ScenarioStyles as Styles } from './ScenarioStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

class DiversityScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();
    }
    render() {
        let { navigation } = this.props;

        return (
            <View style={Styles.container} >
                <Header title={'A Diversity of Spirits'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <View style={Styles.contentContainer}>
                        <CollapsibleSection sectionTitle='Background'>
                            <View>
                                <Text style={Styles.sectionText}>
                                    {'Why should a Spirit of the open air speak the same language as a Spirit of flame and renewal '}
                                    {'or understand the deep voice of a mountain? The Spirits defending the island are strong in their '}
                                    {'own nature and have difficulty communicating nuanced information to each other as a result.'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'RECOMMENDATIONS & NOTES'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 This Scenario is less about mechanical changes and more about altering the experience of the game. Some players love it, but it\'s not for everyone.'}
                                </Text>
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY EASIER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for groups where the players are highly familiar with each others\' playstyles and/or highly familiar with all Spirits being played.'}
                                </Text>
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY HARDER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 when playing a Spirit new to you, or a Spirit you don\'t recall well. '}
                                    {'(And less fun, because you lose some of the collaboration in exploring a Spirit\'s capabilities.)'}
                                </Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 for Spirits with restrictive '}
                                    <Image resizeMode='cover' style={IconStyles.Presence} source={require('../Assets//Icons/PresenceIcon.png')} />
                                    {' placement.'}
                                </Text>
                            </View>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Rule Changes'>
                            <Text style={Styles.sectionTextBold}>{'Difficulty Communicating'}</Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 For planning and discussing strategy, Spirits may not use any language shared in common at game start, '}
                                {'and may not look at each others\' Power Cards in the Spirit Phase. (Once the '}
                                <Image resizeMode='cover' style={IconStyles.Fast} source={require('../Assets//Icons/FastIcon.png')} />
                                {' phase starts, you can look at each others\' played cards.)'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Language can be used normally to execute game mechanics ("2 Fear, please), describing what you\'re doing ("I Destroy this Town"),'}
                                {' rules questions, out-of-game chit-chat ("Could you grab me a drink?"), and keeping the game flowing. '}
                                {'The stricture applies only to coordination and planning.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 When performing game effects not associated with a particular Spirit, player, or board, take turns making the decision.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Roleplaying is not required, but can add atmosphere if your group enjoys such things.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'Interpret edge-cases as is most fun with your playgroup. A suggested starting-point:'}
                            </Text>
                            <Text style={Styles.sectionTextBold}>{'What\'s fine?'}</Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Gestures, evocative noises, and body language.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Things like nodding, shrugging, or thumbs-up to show affect or emotion (approval, indifference, etc.).'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Pointing at lands, players, or the choice one favors on a Choice Event.'}
                            </Text>
                            <Text style={Styles.sectionTextBold}>{'What makes communication too easy?'}</Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Planning by pointing at text (e.g., Innate Powers).'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Indicating precise numbers (e.g., with fingers).'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Indicating precise effects using pieces (e.g., by separating them into groups).'}
                            </Text>
                            <Text style={Styles.sectionTextBold}>{'Strength in Diversity'}</Text>
                            <Text style={Styles.sectionText}>
                                {'After Growth, if you added 1 or more '}
                                <Image resizeMode='cover' style={IconStyles.Presence} source={require('../Assets//Icons/PresenceIcon.png')} />
                                {' to lands with other Spirits\' '}
                                <Image resizeMode='cover' style={IconStyles.Presence} source={require('../Assets//Icons/PresenceIcon.png')} />
                                {': Gain 1 Energy or Reclaim 1 non-Major Power Card.'}
                            </Text>
                        </CollapsibleSection>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default DiversityScreen;