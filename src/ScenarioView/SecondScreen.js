import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import FullWidthImage from 'react-native-fullwidth-image'

import { ScenarioStyles as Styles } from './ScenarioStyles';
import { IconStyles } from '../common/IconStyles';
import Header from '../common/Header';
import { CollapsibleSection } from '../common/CollapsableSection';

const tableHead = ['', 'Wave 3', 'Wave 4', 'Wave 5', 'Wave 6', 'Wave 7'];
const tableData = [
    ['Blight Left on Board', '3/player', '4/player', '5/player', '6/player', '7/player'],
    ['Closer to Coast Shift for Pre-printed Invaders', '-2', '-1', '0', '0', '0'],
    ['On each board, add a Town to land #\'s', '4,5', '3,4,5', '2,3,4,5', '1,2,3,4,5', '1,2,3,4,5,6']
]

class SecondScreen extends Component {
    constructor(props) {
        super(props);

        this.scrollView = React.createRef();
    }

    render() {
        let { navigation } = this.props;

        return (
            <View style={Styles.container} >
                <Header title={'Second Wave'} navigation={navigation} navStyle={'back'} />
                <ScrollView style={Styles.scrollContainer} ref={this.scrollView}>
                    <FullWidthImage source={require('../Assets/second.png')} width={600} height={436} />
                    <View style={Styles.contentContainer}>
                        <CollapsibleSection sectionTitle='Background'>
                            <View>
                                <Text style={Styles.sectionText}>
                                    {'The Invaders have been driven off once, but they are not staying away, '}
                                    {'and the Spirits who first defended the island have grown too powerful '}
                                    {'and slow to react to this second wave of Invaders. '}
                                    {'Can a new set of spirits rise to the occasion and keep the island safe? '}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY EASIER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 If you delay the prior games\'s victory to stack the board. '}
                                    {'Either don\'t do that or using scoring.'}
                                </Text>
                                <View style={Styles.sectionSpacer} />
                                <Text style={Styles.sectionTextBold}>{'THIS SCENARIO IS NOTABLY HARDER'}</Text>
                                <Text style={Styles.sectionText}>
                                    {'\u2022 Against French Plantation Colony - due to '}
                                    <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                    {' limits, later waves will become outright impossible.'}
                                </Text>
                                <Text style={Styles.sectionText}>
                                    {'This Scenario is played as a follow-up game, set decades later. '}
                                    {'you play different Spirits in the second game, fighting against the same Adversary.'}
                                </Text>
                            </View>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Rule Changes'>
                            <Text style={Styles.sectionTextBold}>{'Assistance From the First Spirits'}</Text>
                            <Text style={Styles.sectionText}>
                                {'Once Stage 3 begins the Power Cards set aside from the first game may be "played" '}
                                {'(during the Spirit Phase, as usual). They cost nobody any Energy or Card Plays, '}
                                {'grant no Elements, and may target any land. Thresholds trigger if they require 10 or fewer Elements. '}
                                {'Each one is discarded after one use (or at the end of the game, if playing further waves).'}
                            </Text>
                            <View style={Styles.sectionSpacer} />

                            <Text style={Styles.sectionTextBold}>{'After the First Game'}</Text>
                            <Text style={Styles.sectionText}>
                                {'Each Spirit sets aside one Power Card to assist with the next game. '}
                                {'(See "Assistance From the First Spirits above") Remove all '}
                                <Image resizeMode='cover' style={IconStyles.Presence} source={require('../Assets/Icons/PresenceIcon.png')} />
                                {' and Invaders. Leave on the island:'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 One of each token-type per player (so in a 2p game: 2 '}
                                <Image resizeMode='cover' style={IconStyles.Beast} source={require('../Assets/Icons/BeastIcon.png')} />
                                {' , 2 '}
                                <Image resizeMode='cover' style={IconStyles.Wild} source={require('../Assets/Icons/WildIcon.png')} />
                                {' , 2 '}
                                <Image resizeMode='cover' style={IconStyles.Disease} source={require('../Assets/Icons/DiseaseIcon.png')} />
                                {' ).'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 2 '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                {'  per player. Return the rest to the Blight card.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 All '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets/Icons/DahanIcon.png')} />
                                {' In lands with 2 '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets/Icons/DahanIcon.png')} />
                                {' or more, Push 1 '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets/Icons/DahanIcon.png')} />
                                {' to adjacent lands until there are 2 or fewer.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Then, on each board with 2-4 '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets/Icons/DahanIcon.png')} />
                                {' , add 1 '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets/Icons/DahanIcon.png')} />
                                {' to the lowest-numbered land with '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets/Icons/DahanIcon.png')} />
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Then, on each board with 9 '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets/Icons/DahanIcon.png')} />
                                {' or more, remove '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets/Icons/DahanIcon.png')} />
                                {' until there are 8 or fewer.'}
                            </Text>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Setup Changes'>
                            <Text style={Styles.sectionTextBold}>{'Second Game Setup'}</Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 If the Blight card is on the Healthy side: Increase the Adversary Level by 1.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 If the Blight card is on the Blighted side: Return it to "Healthy". Leave 2 '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                {' per player on it, and set the rest next to the card. If it flips to Blighted ignore the amount of '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                {' printed on the Blighted side and instead use the '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                {' sitting next to the card from the first game. (This will often be less than the printed amount, because some '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                {' has been left on the island.)'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Do not place pre-printed tokens, '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                {' or '}
                                <Image resizeMode='cover' style={IconStyles.Dahan} source={require('../Assets/Icons/DahanIcon.png')} />
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Pre-printed Invaders start closer to the coast: any which would go into land #6 + '}
                                {'instead go into the land numbered 3 lower. (So a '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {' printed on land #7 would instead be put into land #4.)'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 On each board: Add 1 '}
                                <Image resizeMode='cover' style={IconStyles.Town} source={require('../Assets/Icons/TownIcon.png')} />
                                {' to land #5.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 Adversary Setup changes: apply normally, but any extra '}
                                <Image resizeMode='cover' style={IconStyles.Blight} source={require('../Assets/Icons/BlightIcon.png')} />
                                {' is added from the Blight Pool.'}
                            </Text>
                            <Text style={Styles.sectionText}>
                                {'\u2022 '}
                                <Image resizeMode='cover' style={IconStyles.Fear} source={require('../Assets/Icons/FearIcon.png')} />
                                {' , Events, the Invader Deck, and Spirits are all setup up normally.'}
                            </Text>
                        </CollapsibleSection>

                        <CollapsibleSection sectionTitle='Later Waves'>
                            <Text style={Styles.sectionText}>
                                {'If you want to play further waves, most rules from the above remain the same. The only changes are:'}
                            </Text>
                            <Table borderStyle={{ borderWidth: 1, borderColor: 'black' }}>
                                <Row data={tableHead} textStyle={Styles.tableText} />
                                <Rows data={tableData} textStyle={Styles.tableText} />
                            </Table>
                        </CollapsibleSection>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SecondScreen;